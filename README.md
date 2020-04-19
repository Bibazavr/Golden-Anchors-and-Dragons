# GA&D
GA&amp;D - Golden Anchors  &amp; Dragons


## Introduction

1. Для работы над проектом нужно [Node.js][Node.js].
1. Весь проект написан на [typeScript][ts] + [react-native][react-native] + [react-navigation][react-navigation] + [jest][jest] с использование [Expo CLI][expo] 
    
    В будущем пранируется перейти на React Native CLI, когда будет написан модуль BLE


## Prepare

Установка Expo CLI:

    npm install expo-cli --global 
    
Установка всех необходимых для работы пакетов:

    npm ci
    
    
## Work

Запуск expo:

    npm start
    
## Testing

Разовая проверка тестов:

    jest

Обновить все snapshoot:

    jest -u 
    
Запустить все тесты и следить:

    jest --watchAll
    
    
[Node.js]: https://nodejs.org/en/
[react-native]: https://reactnative.dev/
[react-navigation]: https://reactnavigation.org/docs/drawer-based-navigation/
[expo]: https://expo.io/learn
[jest]: https://jestjs.io/
[ts]: https://www.typescriptlang.org/