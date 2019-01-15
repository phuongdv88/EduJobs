import React, { Component } from 'react';
import '../components/css/main_styles.css';
import '../components/css/animate.css';
import '../components/css/owl.carousel.css';
import '../components/css/blog.css';
import '../components/css/owl.theme.default.css';
import '../components/css/responsive.css';
import '../components/css/home.css';
import '../components/css/login.css';


//import '../components/js/jquery-3.2.1.min.js';
//import "../components/js/bootstrap.min.js";
//import "../components/js/custom.js";
//import "../components/js/TweenMax.min.js";
//import "../components/js/ScrollMagic.min.js";
//import "../components/js/animation.gsap.min.js";
//import "../components/js/ScrollToPlugin.min.js";
//import "../components/js/owl.carousel.js";
//import "../components/js/easing.js";

import img from '../components/img/home_slider_1.jpg';
import logo from '../components/img/logo2.png';
export class Home extends Component {
    static displayName = Home.name;
    constructor(props) {
        super(props);
        this.state = {
            topSchool: [
                { name: "Trường Mầm Non Song Ngữ Việt-Hàn", job: "9" }
                , { name: "Trường Mầm Non Song Ngữ Việt-Hàn", job: "9" }
                , { name: "Trường Mầm Non Song Ngữ Việt-Hàn", job: "9" }
                , { name: "Trường Mầm Non Song Ngữ Việt-Hàn", job: "9" }
                , { name: "Trường Mầm Non Song Ngữ Việt-Hàn", job: "9" }
                , { name: "Trường Mầm Non Song Ngữ Việt-Hàn", job: "9" }
                , { name: "Trường Mầm Non Song Ngữ Việt-Hàn", job: "9" }
            ]
        }
        console.log(img);
    }

    render() {
        return (
            <div >
                <a href="#" data-target="#dangnhap" data-toggle="modal" >Đăng nhập</a>
                <Search />

                <div className="content">
                    <div className="topSchool">
                        <div className="row">
                            {
                                this.state.topSchool.map(function (item) {
                                    return (
                                        <TopSchool name={item.name} job={item.job} />
                                    )

                                })
                            }
                        </div>

                    </div>
                </div>
                <Footer />
             
                <DangNhap />
            </div>
        );
    }
}
// search
export class Search extends React.Component {

    render() {

        return (
            <div className="col-md-12 col-sm-12 col-lg-12 search">
                <div className="container divSearch">
                    <div className="row textSearch">
                        <div className="col-md-7 col-sm-7 col-lg-7">
                            <span className="fa fa-search form-control-feedback"></span>
                            <input id="textsearch" type="text" className="form-control" placeholder="Tìm kiếm" />
                        </div>
                        <div className="col-md-3 col-sm-3 col-lg-3">
                            <span className="fa fa-map-marker form-control-feedback"></span>
                            <input id="diadiem" type="text" className="form-control" placeholder="Địa điểm" />
                        </div>
                        <div className="col-md-2 col-sm-2 col-lg-2">
                            <Button name="Tìm kiếm" />

                        </div>
                    </div>

                </div>
            </div>
        );
    };

}
// button
export class Button extends React.Component {
    render() {
        return (
            <button className={this.props.class} onClick={this.props.onclick}>{this.props.icon} {this.props.name}</button>
            // <input type="submit" value={this.props.name} className={this.props.class} onClick={this.props.onclick} />
        )
    }
}
// top school
export class TopSchool extends React.Component {
    render() {
        return (
            <div className="col-md-4 col-sm-4 col-lg-4">
                <div className="blog_post trans_200">
                    <div className="blog_post_image">
                        <img src={img} />
                    </div>
                    <div className="blog_post_body">
                        <div className="blog_post_title">
                            <a href="#">{this.props.name}</a>
                        </div>

                        <div className="blog_post_text">
                            <a href="#">{this.props.job}
                                <i>- Hà Nội</i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
// footer
export class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer_background"></div>
                <div className="container">
                    <div className="row footer_row">
                        <div className="col">
                            <div className="footer_content">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-4  footer_col">
                                        <div className="footer_section footer_about">
                                            <div className="footer_logo_container">
                                                <a href="#">
                                                    <img className="widthImg" src={logo} />
                                                </a>
                                            </div>
                                            <div className="footer_about_text">
                                                <p>Tìm việc không khó</p>
                                            </div>
                                            <div className="footer_social">
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-facebook" aria-hidden="true"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-google-plus" aria-hidden="true"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-instagram" aria-hidden="true"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-twitter" aria-hidden="true"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-4  footer_col">
                                        <div className="footer_section footer_contact">
                                            <div className="footer_title">Liên Hệ</div>
                                            <div className="footer_contact_info">
                                                <ul>
                                                    <li>Email: tuyendunggiaoduc@gmail.com</li>
                                                    <li>Phone: 0987654321</li>
                                                    <li>Số 12, Ngõ 641, Đường Phạm Văn Đồng</li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-4  footer_col">
                                        <div className="footer_section footer_links">
                                            <div className="footer_title">Thông Tin</div>
                                            <div className="footer_links_container">
                                                <ul>
                                                    <li>
                                                        <a href="#">Giới thiệu</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Điều khoản sử dụng</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Chính sách</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Ý tưởng tuyendunggiaoduc.com</a>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

// <!-- modal dang nhập -->
export class DangNhap extends React.Component {
    render() {
        return (
            <div className="modal " id="dangnhap">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Đăng Nhập</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body clearPadding">
                            <div className=" col-lg-12 col-md-12 col-sm-126 col-12 login clearPadding">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-12 formLogin ">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 clearPadding">
                                        <label>Email:</label>
                                        <input type="text" placeholder="Email.." />
                                        <label>Mật khẩu:</label>
                                        <input type="password" placeholder="Mật khẩu.." />
                                        <label>
                                            <input type="checkbox" />
                                            Lưu mật khẩu
                                        </label>
                                    </div>
                                    <div className="row col-lg-12 col-md-12 col-sm-12 col-12 clearPadding">
                                        <div className="row col-lg-12 col-md-12 col-sm-12 col-12 clearPadding">
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                                <a href="#"> Quên mật khẩu? </a>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                                <a href="dangnhap.html"> Đăng ký tài khoản </a>
                                            </div>
                                        </div>
                                        <div className=" col-lg-12 col-md-12 col-sm-12 col-12 btn ">
                                            <Button class="btnDangNhap" name="Đăng nhập" />
                                            {/* <button className="btnDangNhap">Đăng nhập</button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>

        )
    }
}