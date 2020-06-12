import Vue from 'vue'
import {
  Card,
  Button,
  Icon,
  Calendar
} from 'element-ui';
const UI = [Card,
  Button, Icon, Calendar
];
UI.forEach((item) => {
  Vue.use(item)
})