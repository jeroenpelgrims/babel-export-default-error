import BaseFoo from './BaseFoo';

export default class SubFoo extends BaseFoo {
  talk() {
    super.talk();
    console.log('SubFoo.talk');
  }
}