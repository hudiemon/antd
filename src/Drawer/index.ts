import { attachPropertiesToComponent } from '@hudiemon/utils';
import { Body } from './Body';
import { Drawer } from './Drawer';
import { Footer } from './Footer';
import './index.less';
import { open } from './open';

export default attachPropertiesToComponent(Drawer, { open, Body, Footer });
