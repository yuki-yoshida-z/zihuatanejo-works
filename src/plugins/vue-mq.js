import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: {
    tableBreakPoint: 668,
    sp: 1025,
    pc: Infinity
  },
  defaultBreakpoint: 'sp'
})

export default VueMq
