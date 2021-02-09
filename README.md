## rc-input-file

select the image and upload it to the back endInstall.

### Installation

```bash
$ yarn add rc-input-file
```

or 

```bash
$ npm install rc-input-file
```

 

### Quick start

```js
import React from 'react';
import ReactDOM from 'react-dom';
import RcInputFile from 'rc-input-file';

function App() {
  return(
    <div className='app'>
      <RcInputFile>
        <button className='app-upload'>upload</button>
      </RcInputFile>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```



### API

|  props   |     description      |      type       | default |
| :------: | :------------------: | :-------------: | :-----: |
| children | show text on `input` | `ReactElement ` |    —    |

### Test

```bash
$ yarn run test
```

or 

```bash
$ npm run test
```

 

### Contribute

- Fork this Repo first
- Clone your Repo
- Install dependencies by `$ npm install`
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Publish your local branch, Open a pull request
- Enjoy hacking <3