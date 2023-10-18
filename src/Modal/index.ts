import { attachPropertiesToComponent } from '@hudiemon/utils';
import { Body } from './Body';
import { Footer } from './Footer';
import { Modal } from './Modal';
import './index.less';
import { open } from './open';

export default attachPropertiesToComponent(Modal, { open, Body, Footer });
