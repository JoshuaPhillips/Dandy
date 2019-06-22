import zyllanaAvatar from '../assets/zyllana.jpg';
import ilroAvatar from '../assets/ilro.jpg';
import antonAvatar from '../assets/anton.jpg';

const playerLevel = 3;

export const characterBios = {
  zyllana: {
    avatar: zyllanaAvatar,
    alt: '',
    name: 'Zyllana',
    level: playerLevel,
    playerClass: 'Monk',
    race: 'Wood Elf'
  },
  ilro: {
    avatar: ilroAvatar,
    alt: 'Picture of Ilro',
    name: 'Ilro',
    level: playerLevel,
    playerClass: 'Druid',
    race: 'Half-Elf'
  },
  faelthys: {
    avatar: '',
    alt: '',
    name: 'Faelthys',
    level: playerLevel,
    playerClass: 'Ranger',
    race: 'Wood Elf'
  },
  anton: {
    avatar: antonAvatar,
    alt: '',
    name: 'Anton',
    level: playerLevel,
    playerClass: 'Archaeologist',
    race: 'Human'
  }
};
