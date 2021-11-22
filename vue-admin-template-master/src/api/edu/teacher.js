import request from '@/utils/request'

const api_name = '/eduService/teacher/conditionPage'

export default{

    // 进行分页显示教师列表
    getTeacherList(stratIndex,pageSize, teacherQuery){
        return request ({
            // 问题1：url 里边如何 穿请求参数：

            url:`${api_name}/${stratIndex}/${pageSize}`,
            //url: '/eduService/teacher/conditionPage/'+stratIndex+"/"+pageSize"
            method: 'get',
            // teacherQuery条件对象，后端使用RequestBody获取数据
            // data 的作用： 表示把对象转换成json数据，再传到后端接口当中。
            data: teacherQuery,
            
        })

    }

}

/*
export function login(username, password) {
    return request({
      url: '/eduService/user/login',
      method: 'post',
      data: {
        username,
        password
      }
    })
  }
  */
