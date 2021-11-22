import request from '@/utils/request'

export default{

  // 1 。添加课程信息。
  addCourseInfo(courseInfo) {
    return request({

      url: '/edu/course/addCourseInfo',
      // url: '/eduService/teacher/conditionPage/'+stratIndex+"/"+pageSize"
      method: 'post',
      data: courseInfo
    })
  }

}
