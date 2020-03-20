import Mock from 'mockjs';
import data from './pic.json';

Mock.mock('http://www.personal.com/getList', {data: data.result});
