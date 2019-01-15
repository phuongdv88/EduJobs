import React, { Component } from 'react';
import '../components/css/main_styles.css';
import '../components/css/animate.css';
import '../components/css/owl.carousel.css';
import '../components/css/blog.css';
import '../components/css/owl.theme.default.css';
import '../components/css/responsive.css';
import '../components/css/home.css';
import '../components/css/login.css';
import '../components/css/searchEmployers.css';

import { Footer } from './Home';
export class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blog: [
                {
                    title: "Suy nghĩ về một nghề nghiệp trong giáo dục bên ngoài lớp học?", date: "1-1-2018", noidung: "Mặc dù lớp học có thể cảm thấy như ở nhà bây giờ, bạn sẽ thấy mình ở đâu trong một vài năm? Dưới đây là một số cách để phát triển sự nghiệp của bạn trong giáo dục."
                },
                {
                    title: "Suy nghĩ về một nghề nghiệp trong giáo dục bên ngoài lớp học?", date: "1-1-2018", noidung: "Mặc dù lớp học có thể cảm thấy như ở nhà bây giờ, bạn sẽ thấy mình ở đâu trong một vài năm? Dưới đây là một số cách để phát triển sự nghiệp của bạn trong giáo dục."
                },
                {
                    title: "Suy nghĩ về một nghề nghiệp trong giáo dục bên ngoài lớp học?", date: "1-1-2018", noidung: "Mặc dù lớp học có thể cảm thấy như ở nhà bây giờ, bạn sẽ thấy mình ở đâu trong một vài năm? Dưới đây là một số cách để phát triển sự nghiệp của bạn trong giáo dục."
                },
                {
                    title: "Suy nghĩ về một nghề nghiệp trong giáo dục bên ngoài lớp học?", date: "1-1-2018", noidung: "Mặc dù lớp học có thể cảm thấy như ở nhà bây giờ, bạn sẽ thấy mình ở đâu trong một vài năm? Dưới đây là một số cách để phát triển sự nghiệp của bạn trong giáo dục."
                },
                {
                    title: "Suy nghĩ về một nghề nghiệp trong giáo dục bên ngoài lớp học?", date: "1-1-2018", noidung: "Mặc dù lớp học có thể cảm thấy như ở nhà bây giờ, bạn sẽ thấy mình ở đâu trong một vài năm? Dưới đây là một số cách để phát triển sự nghiệp của bạn trong giáo dục."
                },

            ]
        }
    }
    render() {
        return (
            <div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                    <h4>
                        Lời khuyên nghề nghiệp
                </h4>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12 col-12 left">
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-12 col-12 ">
                        {
                            this.state.blog.map(function (item) {
                                return (
                                    <TopBlog title={item.title} date={item.date} noidung={item.noidung} />
                                    )
                              
                            })
                        }
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export class TopBlog extends React.Component {
    render() {
        return (
            <div class="row col-lg-12 col-md-12 col-sm-12 col-12 center">
                <div class="col-lg-4 col-md-4 col-sm-4 col-4 divImg">
                    <a href="#">
                        <img src="img/school1.jpg" />
                    </a>
                </div>
                <div class="col-lg-8 col-md-8 col-sm-8 col-8">
                    <h4>
                        <a href="#">
                            {this.props.title}
                        </a>
                    </h4>
                    <label>{this.props.date}</label>
                    <label>{this.props.noidung}</label>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-12 clearPadding">
                    <hr />
                </div>
            </div>
        )
    }
}

