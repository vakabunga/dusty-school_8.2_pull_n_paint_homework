import React from 'react';
import type { FC } from 'react';

import { cnArticle } from './Article.classname';

import './Article.css';

type ArticleProps = {
  textColor: string;
  bgColor: string;
};

const Article: FC<ArticleProps> = ({ textColor, bgColor }) => {
  return (
    <div className={cnArticle()} style={{ color: textColor, background: bgColor }}>
      <h1 className={cnArticle('Header')}>Новый Мир: Электричество и Магнетизм в XXI веке</h1>
      <p className={cnArticle('Text')}>
        Электричество и магнетизм являются ключевыми направлениями в нашем XXI веке. Развитие
        электромобилей, использование возобновляемых источников энергии, магнитно-резонансная
        томография - вот лишь некоторые примеры их применения. Эти явления не только способствуют
        созданию новых технологий, но и помогают нам лучше понимать мир вокруг нас.
      </p>
    </div>
  );
};

export { Article };
