import {Drawer} from './Drawer';
import {open} from './open';
import {Body} from './Body';
import {Footer} from "./Footer";
import {attachPropertiesToComponent} from '@hudiemon/utils'

import './index.less'

export default attachPropertiesToComponent(Drawer, {open, Body, Footer});
