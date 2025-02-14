import { Component } from '@angular/core';
import { Product } from './product.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd3/h67/63803862581278.jpg?format=gallery-medium',
      name: 'Пылесос Deerma DX700 белый',
      description: 'Пылесос Deerma DX700 – стильный, компактный и удобный пылесос, конструкция которого предусматривает использование в качестве портативного ручного или помощника для эффективной уборки напольных покрытий. Технология циклонной фильтрации благодаря высокой силе всасывания гарантирует быстрый сбор пыли и мусора. Контейнер емкостью 0.8 л легко очищается от собранного мусора. Фильтр HEPA задерживает даже мелкие частицы пыли, тщательно очищая воздух в помещении. Рукоятка эргономичной формы позволяет с комфортом удерживать пылесос под любым углом. В комплекте с Deerma DX700 поставляются универсальная насадка для уборки гладких напольных покрытий и ковров, щетка для мебели и щелевая насадка. Из других преимуществ отмечается низкий уровень шума в процессе работы.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/deerma-dx700-belyi-3701383/?c=750000000',
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb2/hc2/64119540187166.jpg?format=gallery-medium',
      name: 'Мышь Logitech G102 Lightsync черный',
      description: 'Мышь проводная Logitech G102 LightSync позволяет играть с максимальной эффективностью. В мышке применяется датчик игрового уровня с чувствительностью 8000 dpi, регулируемой в широком диапазоне отдельной кнопкой. Logitech G102 LightSync оснащена 6 программируемыми кнопками. В левой и правой кнопках используется металлический пружинный механизм для исключительно точного срабатывания.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000',
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h93/h2b/69003730550814.jpg?format=gallery-medium',
      name: 'Сумка Portcase 9011 черный',
      description: 'Предназначен для удобной переноски и защиты устройства. Элегантный дизайн и функциональность позволяют использовать их как в повседневной жизни, так и в деловой обстановке. Внутренние отделения и мягкая подкладка помогают уберечь ноутбук от повреждений, а дополнительные карманы подходят для хранения аксессуаров и документов. Практичное решение для комфортного и безопасного использования вашего устройства.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/sumka-portcase-9011-chernyi-108895248/?c=750000000',
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa3/pdc/17497973.jpg?format=gallery-medium',
      name: 'Подставка для ноутбука Notestand',
      description: 'Отсутствует',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/notestand-102983515/?c=750000000',
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pc3/p34/18143606.png?format=gallery-medium',
      name: 'Подставка для ноутбука XTREON DCX-036',
      description: 'Отсутствует',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/xtreon-dcx-036-132394419/?c=750000000',
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h3b/ha3/64877476773918.jpg?format=gallery-medium',
      name: 'Блок питания Lenovo ADLX65CCGE2A',
      description: 'Совместимые модели ноутбуков: IdeaPad 310, IdeaPad 310-15ABR, IdeaPad 310-15ISK, IdeaPad 320, IdeaPad 320-15AST, IdeaPad 320-15IAP, IdeaPad 320-15IKB, IdeaPad 320-15ISK, IdeaPad 320-17ABR, IdeaPad 320-17AST, IdeaPad 320-17IKB, IdeaPad 320S-15IKB, IdeaPad 330, IdeaPad 330-14AST, IdeaPad 330-15ARR, IdeaPad 330-15AST',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/lenovo-adlx65ccge2a-104960753/?c=750000000',
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p4b/pd6/16965132.jpeg?format=gallery-medium',
      name: 'Док-станция CashPro USB-C Hub 7в1',
      description: 'Отсутствует',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/cashpro-usb-c-hub-7v1-130355229/?c=750000000',
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd3/h97/85277334405150.jpg?format=gallery-medium',
      name: 'Ноутбук ThundeRobot 911 X Wild Hunter G2L 15.6" / 16 Гб / SSD 512 Гб / Win 11 Pro / JT009500E',
      description: 'Игровой ноутбук THUNDEROBOT 911 X Wild Hunter G2L получил мощные компоненты, которые скрыты в тонком металлическом корпусе. Модель оснащена быстрым экраном, современной видеокартой на 105 Вт и производительным процессором, поэтому подходит для активного гейминга и работы с графикой. Операционная система Windows 11 Pro уже установлена.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/thunderobot-911-x-wild-hunter-g2l-15-6-16-gb-ssd-512-gb-win-11-pro-jt009500e-116983567/?c=750000000',
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h75/hf8/64342528065566.jpg?format=gallery-medium',
      name: 'Рюкзак MeiNaiLi 1603 черный',
      description: 'Предназначен для удобной переноски и защиты устройства. Элегантный дизайн и функциональность позволяют использовать их как в повседневной жизни, так и в деловой обстановке. Внутренние отделения и мягкая подкладка помогают уберечь ноутбук от повреждений, а дополнительные карманы подходят для хранения аксессуаров и документов. Практичное решение для комфортного и безопасного использования вашего устройства.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/rjukzak-meinaili-1603-chernyi-104991714/?c=750000000',
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h65/h13/65140772896798.jpg?format=gallery-medium',
      name: 'Защитная накладка Keyboard guard для MacBook Air A2337',
      description: 'Отсутствует',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/keyboard-guard-dlja-macbook-air-a2337-107356491/?c=750000000',
    }
  ];

  share(product: Product, platform: string) {
    let shareLink = '';
    if (platform === 'whatsapp') {
      shareLink = `https://api.whatsapp.com/send?text=Смотри этот товар: ${product.link}`;
    } else if (platform === 'telegram') {
      shareLink = `https://t.me/share/url?url=${product.link}&text=Смотри этот товар!`;
    }
    window.open(shareLink, '_blank');
  }
}
