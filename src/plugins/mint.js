import Vue from 'vue'
import '../common/css/reset.css'
import 'mint-ui/lib/style.css'
import {
  Tabbar,
  TabItem,
  Header,
  Swipe,
  SwipeItem
} from 'mint-ui'

Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
