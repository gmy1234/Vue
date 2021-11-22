import request from '@/utils/request'

export default{

    // 进行subjcet 的显示
    getSubjectList(){
        return request ({
          
            url:'/edu/subject//getAllSubject',
            //url: '/eduService/teacher/conditionPage/'+stratIndex+"/"+pageSize"
            method: 'get',

        })

    }

}