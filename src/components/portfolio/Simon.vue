<template>
    <div class="simon">
        <div class="simon__inner">
            <audio ref="audio"></audio>

            <div>
            <div 
                class="panel top-left-panel" 
                @click="button(1)"
                :class="{ hovElloy: isElloy }"
                ></div>
            <div 
                class="panel top-right-panel" 
                @click="button(2)"
                :class="{ hovGreen: ishovGreen }"
            ></div>
            </div>
            <div class="buttons_bottom">
                <div 
                class="panel bottom-left-panel" 
                @click="button(4)"
                :class="{ hovBlue: ishovBlue }"
                ></div>
                <div 
                class="panel bottom-right-panel" 
                @click="button(3)"
                :class="{ hovRed: ishovRed }"
                ></div>
            </div>
            <div class="center">
            <div class="wrapper">
                <div class="title">Игра Simon the game</div>
                <div class="round">{{seriesCount}}</div> 
                <div>
                <form class="radio">
                    <div class="radio__input">
                    <input name="radio" type="radio" id="difficlt1" value="1" v-model="difficlty">
                    <label for="difficlt1">Легкий</label>
                    </div>
                    <div class="radio__input">
                    <input name="radio"  type="radio" id="difficlt2" value="2" v-model="difficlty">
                    <label for="difficlt2">Средний</label>
                    </div>
                    <div class="radio__input">
                    <input name="radio"  type="radio" id="difficlt3" value="3" v-model="difficlty">
                    <label for="difficlt3">Сложный</label>
                    </div>
                </form>
                </div>
                <div class="start" @click="startGame">Старт</div>
                <div class="gameOver" v-if="gameOver">Конец игры</div>
            </div>
            </div>
        </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
      return {
        series: [],
        count: 0,
        allowInput: false,// отключает кнопки когда игра выключенна или же идет показ серри для игрока
        seriesCount: 1,// размер серии начинается от 1 и каждую серию увеличивается. 
        gameOver: false,
        isElloy: false,
        ishovGreen: false,
        ishovBlue: false,
        ishovRed: false,
        difficlty: 1,
        time: 1500,
      }
  },
  watch: {
    difficlty() {

      if(this.difficlty == 1) {
        this.time = 1500
      }
      else if (this.difficlty == 2) {
        this.time = 1000
      }
      else {
        this.time = 400
      }

      this.startGame()
    }
  },
  methods: {
    button(value) {// нажатие по кнопке
      if (!this.allowInput)// если сейчас можно 
        return

        this.makeSound(value)// при нажатии клавиши дать звук

        if(value === this.series[this.count]) {// сравниваю номер нажатой кнопки с номером который задал серия

          // console.log("OK")
          this.count++;

          if(this.count == this.series.length) {// если серия кончилась, начинаю новую
            this.seriesCount +=1
            this.count = 0
            this.series = []
            this.playSeries()
          }               
        }
        else {// если нажата непрвильная кнопка то конец игры
          this.allowInput = false;
          this.gameOver = true;
        }
    },
    reset() {// сброс настроек
      this.count = 0
      this.series = []
      this.allowInput = false
      this.seriesCount = 1
      this.gameOver = false
    },
    resetHov(){
      this.isElloy = false;
      this.ishovGreen = false;
      this.ishovRed = false;
      this.ishovBlue = false;
    },
    playSeries() {

      this.allowInput = false

      //create series
      for(let i = 0; i < this.seriesCount; i++ ) {

        this.series.push(this.getRandomFloat())
      }
      // console.log("series " +this.series)

      //show series
      let self = this// save this, в таймере привязка к this меняется на this таймера

      let i = 0;
      let intervalID = setInterval(function(){
        if( i > self.series.length) {
          clearInterval(intervalID);
        }
        self.resetHov()

        self.makeSound(self.series[i])

        switch (self.series[i]) {
          case 1:
            self.isElloy = true
            break;
          case 2:
            self.ishovGreen = true
            break;
          case 3:
            self.ishovRed = true
            break;
          case 4:
            self.ishovBlue = true
            break;
        }
        i++;
   
      }, this.time)

      this.allowInput = true
    },
    startGame() {
      // console.log()
      this.reset();
      this.resetHov();
      this.playSeries(); 
    },
    getRandomFloat() {
      return Math.floor(Math.random() * (5 - 1) + 1);
    },
    makeSound(number_button) {
              // если кнопка нажата
        switch (number_button) {
          case 1:
            this.$refs.audio.src = require("@/assets/audio/1.mp3")
            this.$refs.audio.pause()
            this.$refs.audio.currentTime = 0
            this.$refs.audio.play()
            break;
          case 2:
            this.$refs.audio.src = require("@/assets/audio/2.mp3")
            this.$refs.audio.pause()
            this.$refs.audio.currentTime = 0
            this.$refs.audio.play()
            break;
          case 3:
            this.$refs.audio.src = require("@/assets/audio/3.mp3")
            this.$refs.audio.pause()
            this.$refs.audio.currentTime = 0
            this.$refs.audio.play()
            break;
          case 4:
            this.$refs.audio.src = require("@/assets/audio/4.mp3")
            this.$refs.audio.pause()
            this.$refs.audio.currentTime = 0
            this.$refs.audio.play()
            break;
        }
    }

  }
}
/**
  в серии у меня массив который должен повторить игрок
  когда игрок начинает нажимать кнопку я считаю нажате и к счётчику прибавляю к нему 1
  дальше сверяю номер нажатой кнопки со значением соответствующей ячеки серии индексом которой является счётчик нажатий
  если число счётчика равно длинне масива серии то серия успешно закончена, запускаю функцию создания новой серии
  если серя пройдена успешно то сбрасываю, я этот счётчик, если нет то вывожу сообщение конец игры

 */
</script>

<style lang="sass" scoped>
$white: #fff
$border: #7a9194
$gray: #ccc
$hovElloy: #f3f379
$hovGreen: #b9e0b9
$hovRed: #e49f9f
$hovBlue: #7f7fd8
.hovElloy
    background: $hovElloy!important
.hovGreen
    background: $hovGreen!important
.hovBlue
    background: $hovBlue!important
.hovRed
    background: $hovRed!important
.simon
    overflow-x: auto;
    margin: 0 auto;
    text-align: center
    &__
        &inner
            width: 800px;
            height: 810px;
            overflow: hidden;

.panel 
    width: 400px 
    height: 400px
    display: inline-block
.panel:hover 
    border: 1px solid #ccc
    box-sizing: border-box
    cursor: pointer
.top-right-panel 
    border-top-right-radius: 100%
    background-color: green
.top-left-panel 
    border-top-left-radius: 100%
    background-color: yellow
.bottom-right-panel 
    border-bottom-right-radius: 100%
    background-color: red
.bottom-left-panel 
    border-bottom-left-radius: 100%
    background-color: blue
.buttons_bottom
    position: relative
    top: -4px
.radio
    display: inline-block
    width: 90%
    margin: 10px 0
    font-size: 17px
.radio__input
    width: 90px
    display: inline-block
.center 
    width: 300px
    height: 300px
    border-radius: 100%
    background: #1b1b1b
    border: 5px solid $border
    display: inline-block
    position: relative
    top: -550px
    z-index: 1 
.wrapper 
    color: $white
    z-index: 5  
    padding: 50px 0
    font: 23px Calibri, Helvica
.title
    font-weight: 900
    margin-bottom: 20px
.round
    padding: 10px 30px
    border: 3px solid $border
    border-radius: 15px
    background: #222323
    color: $white
    font-weight: 600
    width: 20%
    margin: 10px auto
.start
    cursor: pointer
.gameOver
    margin-top: 15px
    font-size: 20px
    color: red
    font-weight: 800
    letter-spacing: 0.8px
</style>
