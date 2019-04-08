<template>
  <div class="count">
    <p class="expain">
      数字滚动插件我们选择了vue-count-to，请参考相关
      <a
        href="https://github.com/PanJiaChen/vue-countTo"
        target="_blank"
      >文档</a>
    </p>
    <template>
      <h1>Vue CountTo</h1>
      <div class="container">
        <div class="example-item">
          <h3>simple example</h3>
          <code>&lt;count-to :startVal=&#x27;0&#x27; :endVal=&#x27;2018&#x27; :duration=4000&gt;&lt;/count-to&gt;</code>
          <count-to
            ref="example1"
            class="example1"
            :start-val="startVal1"
            :end-val="endVal1"
            :duration="4000"
          ></count-to>
          <div class="example-btn" @click="start1">start</div>
          <div class="example-btn" @click="changeExampleEndVal">change end-val</div>
          <div class="example-btn" @click="incrementalUpdate">incremental update</div>
        </div>
        <div class="example-item">
          <h3>count down example</h3>
          <code>&lt;count-to :startVal=&#x27;2017&#x27; :endVal=&#x27;0&#x27; :duration=8000&gt;&lt;/count-to&gt;</code>
          <count-to ref="example2" class="example2" :start-val="2017" :end-val="0" :duration="8000"></count-to>
          <div class="example-btn" @click="start2">start</div>
        </div>
        <div class="example-item">
          <h3>custom example</h3>
          <count-to
            ref="example3"
            class="example3"
            :start-val="_startVal"
            :end-val="_endVal"
            :duration="_duration"
            :decimals="_decimals"
            :separator="_separator"
            :prefix="_prefix"
            :suffix="_suffix"
            :autoplay="false"
          ></count-to>
          <div>
            <label class="label" for="startValInput">
              startVal:
              <input type="number" v-model.number="setStartVal" name="startValInput">
            </label>
            <label class="label" for="endValInput">
              endVal:
              <input type="number" v-model.number="setEndVal" name="endVaInput">
            </label>
            <label class="label" for="durationInput">
              duration:
              <input type="number" v-model.number="setDuration" name="durationInput">
            </label>
            <div class="startBtn example-btn" @click="start3">start</div>
            <div class="pause-resume-btn example-btn" @click="pauseResume">pause/resume</div>
            <br>
            <label class="label" for="decimalsInput">
              decimals:
              <input type="number" v-model.number="setDecimals" name="decimalsInput">
            </label>
            <label class="label" for="separatorInput">
              separator:
              <input v-model="setSeparator" name="separatorInput">
            </label>
            <label class="label" for="prefixInput">
              prefix:
              <input v-model="setPrefix" name="prefixInput">
            </label>
            <label class="label" for="suffixInput">
              suffix:
              <input v-model="setSuffix" name="suffixInput">
            </label>
          </div>
          <code>
            &lt;count-to :start-val=&#x27;{{_startVal}}&#x27; :end-val=&#x27;{{_endVal}}&#x27; :duration=&#x27;{{_duration}}&#x27; :decimals=&#x27;{{_decimals}}&#x27;
            :separator=&#x27;{{_separator}}&#x27; :prefix=&#x27;{{_prefix}}&#x27; :suffix=&#x27;{{_suffix}}&#x27; :autoplay=false&gt;
          </code>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import countTo from "vue-count-to";
export default {
  components: { countTo },
  data() {
    return {
      setStartVal: 0,
      setEndVal: 2017,
      setDuration: 4000,
      setDecimals: 0,
      setSeparator: ",",
      setSuffix: " rmb",
      setPrefix: "¥ ",
      startVal1: 0,
      endVal1: 2017
    };
  },
  computed: {
    _startVal() {
      if (this.setStartVal) {
        return this.setStartVal;
      } else {
        return 0;
      }
    },
    _endVal() {
      if (this.setEndVal) {
        return this.setEndVal;
      } else {
        return 0;
      }
    },
    _duration() {
      if (this.setDuration) {
        return this.setDuration;
      } else {
        return 100;
      }
    },
    _decimals() {
      if (this.setDecimals) {
        if (this.setDecimals < 0 || this.setDecimals > 20) {
          alert("digits argument must be between 0 and 20");
          return 0;
        }
        return this.setDecimals;
      } else {
        return 0;
      }
    },
    _separator() {
      return this.setSeparator;
    },
    _suffix() {
      return this.setSuffix;
    },
    _prefix() {
      return this.setPrefix;
    }
  },
  methods: {
    changeExampleEndVal() {
      this.endVal1 = this.endVal1 + 1000;
    },
    incrementalUpdate() {
      this.startVal1 = this.endVal1;
      this.endVal1 = this.endVal1 + 1000;
    },
    callback() {
      console.log("callback");
    },
    start1() {
      this.$refs.example1.start();
    },
    start2() {
      this.$refs.example2.start();
    },
    start3() {
      this.$refs.example3.start();
    },
    pauseResume() {
      this.$refs.example3.pauseResume();
    }
  }
};
</script>
<style lang="scss" scoped>
.count {
  padding: 40px;
  font-size: 20px;
}
.expain{
    background: #F2F6FC;
    line-height: 60px
}
.expain a {
  color: #bdb7ff;
}
code {
  display: block;
  padding: 8px 15px;
  background-color: #f6f8fa;
  border-radius: 5px;
  border: 1px solid #e5e5e5;
  overflow-x: auto;
  font-family: Monaco, Bitstream Vera Sans Mono, Lucida Console, Terminal;
  color: #333;
  font-size: 12px;
}

p,
ul,
ol,
table,
pre,
dl {
  margin: 0 0 20px;
}

h1 {
  color: #4ab7bd;
  font-size: 60px;
  text-align: center;
}

h3 {
  font-size: 36px;
  color: #494949;
  line-height: 1.1;
}

.github-corner:hover .octo-arm {
  animation: octocat-wave 560ms ease-in-out;
}

@keyframes octocat-wave {
  0%,
  100% {
    transform: rotate(0);
  }
  20%,
  60% {
    transform: rotate(-25deg);
  }
  40%,
  80% {
    transform: rotate(10deg);
  }
}

@media (max-width: 500px) {
  .github-corner:hover .octo-arm {
    animation: none;
  }
  .github-corner .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
}

#app {
  margin: 20px;
}

.container {
  width: 980px;
  margin-right: auto;
  margin-left: auto;
}

.example-btn {
  display: inline-block;
  margin-bottom: 0;
  font-weight: 500;
  text-align: center;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  line-height: 1.5;
  padding: 4px 15px;
  font-size: 12px;
  border-radius: 4px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  position: relative;
  color: rgba(0, 0, 0, 0.65);
  background-color: #fff;
  border-color: #d9d9d9;
}

.example-btn:hover {
  color: #4ab7bd;
  background-color: #fff;
  border-color: #4ab7bd;
}

.example-item {
  margin-bottom: 80px;
}

.example1 {
  font-size: 40px;
  color: #30b08f;
  display: block;
  margin: 10px 0;
}

.example2 {
  font-size: 40px;
  color: #e65d6e;
  display: block;
  margin: 10px 0;
}

.example3 {
  font-size: 50px;
  color: #f6416c;
  display: block;
  margin: 10px 0;
  text-align: center;
  font-size: 80px;
  font-weight: 500;
}

.label {
  color: #2f4f4f;
  font-size: 16px;
  display: inline-block;
  margin: 15px 30px 15px 0;
}

input {
  position: relative;
  display: inline-block;
  padding: 4px 7px;
  width: 50px;
  height: 28px;
  cursor: text;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
  background-color: #fff;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.startBtn {
  margin-left: 20px;
  font-size: 20px;
  color: #30b08f;
  background-color: #fff;
}

.startBtn:hover {
  background-color: #30b08f;
  color: #fff;
  border-color: #30b08f;
}

.pause-resume-btn {
  font-size: 20px;
  color: #e65d6e;
  background-color: #fff;
}

.pause-resume-btn:hover {
  background-color: #e65d6e;
  color: #fff;
  border-color: #e65d6e;
}
</style>
