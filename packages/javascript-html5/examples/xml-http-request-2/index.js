
import React, { Component } from 'react'

export default class extends Component {

  state = {
    'content': ''
  }

  componentDidMount() {
    var xhr = new XMLHttpRequest();

    // timeout
    xhr.timeout = 3000
    xhr.ontimeout = () => {
      console.log(`request timeout!`)
    }

    // FormData
    var formData = new FormData()
    formData.append('username', '张三')
    formData.append('id', 1234455)

    // FormData 通过 DOM 获取
    // var form = document.getElementById('myform')
    // var formDataFromDom = new FormData(form)
    // formDataFromDom.append('secret', '123456')

    // FormData 上传文件
    // var formDataFromFile = new FormData();
    // for (var i=0; i<files.length; i++) {
    //   formDataFromFile.append('files[]', files[i]);
    // }

    // 跨域资源请求（CORS）

    // 接受二进制数据（MIMEType）
    // xhr.overrideMimeType("text/plain; charset=x-user-defined")
    // 接受二进制数据（responseType）
    // xhr.responseType = 'blob'
    // 接受二进制数据
    // new Blob([ xhr.response ], { type: 'image/png' })

    // 进度条
    xhr.onprogress = updateProgress
    xhr.upload.onprogress = updateProgress
    function updateProgress(event) {
      if (event.lengthComputable) {
        var percentComplete = event.loaded / event.total
        console.log(percentComplete)
    }
  }

    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        this.setState({ 'content': xhr.responseText })
      } else {
        console.log(xhr.statusText)
      }
    }

    xhr.open('GET', 'http://cmp.italent.cn/api/v2/components')
    xhr.send(formData)
  }

  render () {
    return <div>
      xmlHttpRequest Level 2
      <br/>
      <form id="myform">
        <div>
        checkbox: <input type="checkbox" name="check"></input>
        </div>
        <div>
        color: <input type="color" name="color" value="red" onChange={()=>{}}></input>
        </div>
      </form>
    </div>
  }
}
