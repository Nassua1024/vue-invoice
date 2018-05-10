import Vue from 'vue'
import { 
    Switch, 
    Button, 
    Message, 
    Dialog, 
    Row, 
    Col, 
    Input, 
    Loading, 
    Select, 
    Option 
} from 'element-ui'

Vue.use(Switch)
Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Input)
Vue.use(Loading)
Vue.use(Dialog)
Vue.use(Select)
Vue.use(Option)

Vue.prototype.$message = Message
