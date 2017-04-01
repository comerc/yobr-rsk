# yobr

[DEMO](https://yobr-rsk.now.sh/post/all)

### SETUP

- Поставить: [nodejs](https://nodejs.org/), [yarn](https://yarnpkg.com/), [git](https://www.atlassian.com/git/tutorials/install-git).
- Клонировать и запустить проект:
```bash
$ git clone git@github.com:comerc/yobrRSK.git
$ cd yobrRSK
$ yarn install
$ yarn start
```

### TODO

- пока отключил import/no-unresolved - использую абсолютные пути в импорте, но [не работает eslint resolve](https://github.com/kriasoft/react-starter-kit/issues/1180)
- пока нельзя использовать абсолютные пути в импорте для 'src/styles' - т.к. [не работает eslint resolve](https://github.com/kriasoft/react-starter-kit/issues/1180), ругается css-modules/no-undef-class
- выпилил pre-commit
