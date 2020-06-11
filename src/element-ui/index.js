import Vue from 'vue'
import {
  Card,
  Button,
  Icon
} from 'element-ui';
const UI = [Card,
  Button, Icon
];
UI.forEach((item) => {
  Vue.use(item)
})