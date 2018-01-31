import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const user = [
      { id: 0,  username: 'admin', password: '123456', email: '163@qq.com', phone: '15564186520', school: 'sdibt', major: 'computer', classname: 'jf142', stuid: 'jf14831216', goodsubject: 'photoshop', gradelist: 'xxx', gradelistcaption: 'gradelistcaption'},
      { id: 11,  username: 'Mr. Nice', password: '123456', email: '163@qq.com', phone: '15564186520', school: 'sdibt', major: 'computer', classname: 'jf142', stuid: 'jf14831216', goodsubject: 'photoshop', gradelist: 'xxx', gradelistcaption: 'gradelistcaption'},
      { id: 12,  username: 'Narco', password: '123456', email: '163@qq.com', phone: '15564186520', school: 'sdibt', major: 'computer', classname: 'jf142', stuid: 'jf14831216', goodsubject: 'photoshop', gradelist: 'xxx', gradelistcaption: 'gradelistcaption'},
      { id: 13,  username: 'Bombasto', password: '123456', email: '163@qq.com', phone: '15564186520', school: 'sdibt', major: 'computer', classname: 'jf142', stuid: 'jf14831216', goodsubject: 'photoshop', gradelist: 'xxx', gradelistcaption: 'gradelistcaption'},
      { id: 14,  username: 'Celeritas', password: '123456', email: '163@qq.com', phone: '15564186520', school: 'sdibt', major: 'computer', classname: 'jf142', stuid: 'jf14831216', goodsubject: 'photoshop', gradelist: 'xxx', gradelistcaption: 'gradelistcaption'},
      { id: 15,  username: 'Magneta', password: '123456', email: '163@qq.com', phone: '15564186520', school: 'sdibt', major: 'computer', classname: 'jf142', stuid: 'jf14831216', goodsubject: 'photoshop', gradelist: 'xxx', gradelistcaption: 'gradelistcaption'},
      { id: 16,  username: 'RubberMan', password: '123456', email: '163@qq.com', phone: '15564186520', school: 'sdibt', major: 'computer', classname: 'jf142', stuid: 'jf14831216', goodsubject: 'photoshop', gradelist: 'xxx', gradelistcaption: 'gradelistcaption'},
      { id: 17,  username: 'Dynama', password: '123456', email: '163@qq.com', phone: '15564186520', school: 'sdibt', major: 'computer', classname: 'jf142', stuid: 'jf14831216', goodsubject: 'photoshop', gradelist: 'xxx', gradelistcaption: 'gradelistcaption'},
      { id: 18,  username: 'Dr IQ', password: '123456', email: '163@qq.com', phone: '15564186520', school: 'sdibt', major: 'computer', classname: 'jf142', stuid: 'jf14831216', goodsubject: 'photoshop', gradelist: 'xxx', gradelistcaption: 'gradelistcaption'},
      { id: 19,  username: 'Magma', password: '123456', email: '163@qq.com', phone: '15564186520', school: 'sdibt', major: 'computer', classname: 'jf142', stuid: 'jf14831216', goodsubject: 'photoshop', gradelist: 'xxx', gradelistcaption: 'gradelistcaption'},
      { id: 20,  username: 'Tornado', password: '123456', email: '163@qq.com', phone: '15564186520', school: 'sdibt', major: 'computer', classname: 'jf142', stuid: 'jf14831216', goodsubject: 'photoshop', gradelist: 'xxx', gradelistcaption: 'gradelistcaption'},
      
    ];
    const requirement = [
      { id: 1, subject: 'Chinese', price: '20/ks', sex: 1, leantime: '周末', requitattribute: '1' },
      { id: 2, subject: 'English', price: '60/ks', sex: 0, leantime: '周末', requitattribute: '1' },
      { id: 3, subject: 'biology', price: '40/ks', sex: 1, leantime: '周末', requitattribute: '1' },
      { id: 4, subject: 'Math', price: '80/ks', sex: 0, leantime: '周末', requitattribute: '1' },

    ];
    return {user,requirement};
  }
}
