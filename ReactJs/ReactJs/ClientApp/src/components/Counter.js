import React, { Component } from 'react';

import '../components/css/main_styles.css';
import '../components/css/animate.css';
import '../components/css/owl.carousel.css';
import '../components/css/blog.css';
import '../components/css/owl.theme.default.css';
import '../components/css/responsive.css';
import '../components/css/home.css';
import '../components/css/searchAdvance.css';
import '../components/css/login.css';


import { Footer } from './Home';
import { Button } from './Home';
import { DangNhap } from './Home';
export class Counter extends Component {
    static displayName = Counter.name;

    constructor(props) {
        super(props);
        this.state = {
            topjob: [
                { title: "Tuyển dụng giáo viên", luong: "4tr-12tr", school: "Trường mầm non Hoàng Ngân", diachi: "Xuân Thủy-Cầu Giấy" },
                { title: "Tuyển dụng giáo viên", luong: "4tr-12tr", school: "Trường mầm non Hoàng Ngân", diachi: "Xuân Thủy-Cầu Giấy" },
                { title: "Tuyển dụng giáo viên", luong: "4tr-12tr", school: "Trường mầm non Hoàng Ngân", diachi: "Xuân Thủy-Cầu Giấy" },
                { title: "Tuyển dụng giáo viên", luong: "4tr-12tr", school: "Trường mầm non Hoàng Ngân", diachi: "Xuân Thủy-Cầu Giấy" },
                { title: "Tuyển dụng giáo viên", luong: "4tr-12tr", school: "Trường mầm non Hoàng Ngân", diachi: "Xuân Thủy-Cầu Giấy" },
                { title: "Tuyển dụng giáo viên", luong: "4tr-12tr", school: "Trường mầm non Hoàng Ngân", diachi: "Xuân Thủy-Cầu Giấy" },
            ],
            job: [
                { title: "Tuyển Giáo viên mầm non", diachi: "Cầu Giấy" },
                { title: "Tuyển Giáo viên mầm non", diachi: "Cầu Giấy" },
                { title: "Tuyển Giáo viên mầm non", diachi: "Cầu Giấy" },
            ]
        }

    }



    render() {
        return (
            <div>
                <div className="col-md-12 col-sm-12 col-lg-12  col-xl-12  col-12 textSearchJob">
                    <h3>Tìm tất cả các công việc ngành giáo dục</h3>

                </div>
                <div className="row">
                    <div className="col-md-3 col-sm-3 col-lg-3 col-12">
                        <MenuLeft />
                    </div>

                    <div className="col-md-7 col-sm-7 col-lg-7 col-12 ">
                        <GetEmail />
                        {
                            this.state.job.map(function (item) {
                                return (
                                    <Job title={item.title} diachi={item.diachi} />
                                )
                            })
                        }
                        <GetEmail />
                    </div>
                    <div className="col-md-2 col-sm-2 col-lg-2 col-12 ">
                        {
                            this.state.topjob.map(function (item) {
                                return (
                                    <TopJob title={item.title} luong={item.luong} school={item.school} diachi={item.diachi} />
                                )
                            })
                        }
                    </div>
                    <DangNhap/>
                </div>
                <Footer />
            </div>
        )
    }
}


// job
export class Job extends React.Component {
    render() {
        return (
            <div className="col-md-12 col-sm-12 col-lg-12  col-xl-12  col-12 clearPadding jobSearchAdvance">
                <div className="col-md-12 col-sm-12 col-lg-12  col-xl-12  col-12 textTiltes">
                    <h4>
                        <a href="#">{this.props.title}</a>
                    </h4>
                    <label>{this.props.diachi}</label>
                </div>
                <div className="row col-md-12 col-sm-12 col-lg-12  col-xl-12  col-12 ">
                    <div className="col-md-7 col-sm-7 col-lg-7 col-12 ">


                        <li>Cần tuyển 5 giáo viên</li>
                        <li>Trình độ tốt nghiệp đại học</li>
                        <li>Mức lương: 4 triệu đến 8 triệu</li>
                    </div>
                    <div className="col-md-5 col-sm-5 col-lg-5 col-12 ">
                        <img className="imgLogoSchool" src="img/school1.jpg" />
                    </div>
                    <div className="col-md-12 col-sm-12 col-lg-12  col-xl-12   col-12 ">
                        <p className="text"> Hiệu Trưởng cung cấp khả năng lãnh đạo và quản lý một địa điểm trường học, bao gồm việc thực
                            hiện hiệu quả các sáng kiến ​​của học khu Hiệu Trưởng cung cấp khả năng lãnh đạo và quản
                            lý một địa điểm trường học, bao gồm việc thực hiện hiệu quả các sáng kiến ​​của học khu
                            ...
                                </p>
                    </div>
                    <div className="row col-md-12 col-sm-12 col-lg-12  col-xl-12   col-12 ">
                        <div className="col-md-6 col-sm-6 col-lg-6 col-12  ">
                            {/* <button className="btnChiTiet">Xem chi tiết</button> */}
                            <Button name="Xem chi tiết" class="btnChiTiet" />
                        </div>
                        <div className="col-md-6 col-sm-6 col-lg-6 col-12 ">
                            <Button class="btnLike" icon={<I class="fa fa-heart-o" />} name="4" />
                            {/* <button className="btnLike">5
                                        <i className="fa fa-heart-o"></i>
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
//  top job
export class TopJob extends React.Component {
    render() {
        return (
            <div className="col-md-12 col-sm-12 col-lg-12  col-xl-12  col-12 clearPadding topJob">
                <a href="#">
                    <p>{this.props.title}</p>
                </a>
                <li>{this.props.luong}</li>
                <li>{this.props.school}</li>
                <li>{this.props.diachi}</li>
            </div>

        )
    }
}
// nhan thong bao
export class GetEmail extends React.Component {
    render() {
        return (
            <div className="col-md-12 col-sm-12 col-lg-12 col-12 getEmail">
                <div className="magrin" >
                    <span >Nhận thông báo việc làm mới qua </span>
                    <Button icon={<I class='fa fa-envelope' />} name="Email" class="btnEmail" />
                    {/* <button className="btnEmail">
                        <i className='far fa-envelope'></i> Email</button> */}
                </div>

            </div>
        )
    }
}
export class MenuLeft extends React.Component {
    render() {
        return (
            <div>
                < ul className="nav nav-tabs" role="tablist" >
                    <li className="nav-item">
                        <a className="nav-link active " data-toggle="tab" href="#duyet">Duyệt</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link  " data-toggle="tab" href="#search">Tìm kiếm</a>
                    </li>

                </ul >


                <div className="tab-content menuLeft" /*style="color: #384158"*/>
                    <div id="duyet" className="container tab-pane active clearPadding">
                        <div>
                            <p>Từ khóa</p>
                            <div className="col-md-12 col-sm-12 col-lg-12  col-xl-12  col-12 clearPadding">
                                <span className="fa fa-search form-control-feedback"></span>
                                <input id="textsearch" className="form-control" type="text" placeholder="Từ khóa tìm kiếm" />
                            </div>

                            <div>
                                <input className="btnSearch" type="submit" value="Tìm kiếm" />
                            </div>
                        </div>

                        <div className="formtuychinh">
                            <h5>Tùy chỉnh tìm kiếm</h5>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 clearPadding">
                                <hr />
                                <div>
                                    <ul>
                                        <li>
                                            <label>Ngành nghề</label>
                                            <span className="caret"></span>
                                            <ul className="nested">
                                                <li>
                                                    <a href="#">Quản trị viên </a>
                                                    <i>9</i>
                                                </li>
                                                <li>
                                                    <a href="#">Giảng dạy </a>
                                                    <i>8</i>
                                                </li>
                                                <li>
                                                    <a href="#">Nhân viên hỗ trợ </a>
                                                    <i>11</i>
                                                </li>
                                                <li>
                                                    <a href="#">Dịch vụ khác</a>
                                                    <i>99</i>
                                                </li>
                                            </ul>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 clearPadding">
                                <hr />
                                <div>
                                    <ul>
                                        <li>
                                            <label>Vị trí</label>
                                            <span className="caret"></span>
                                            <ul className="nested">
                                                <li>
                                                    <a href="#">Hà Nội</a>
                                                    <i>9</i>
                                                </li>
                                                <li>
                                                    <a href="#">Huế </a>
                                                    <i>8</i>
                                                </li>
                                                <li>
                                                    <a href="#">Đà Nẵng</a>
                                                    <i>11</i>
                                                </li>
                                                <li>
                                                    <a href="#">Nha Trang</a>
                                                    <i>99</i>
                                                </li>
                                                <li>
                                                    <a href="#">Đà Lạt</a>
                                                    <i>11</i>
                                                </li>
                                                <li>
                                                    <a href="#">Hồ Chí Minh</a>
                                                    <i>99</i>
                                                </li>
                                            </ul>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 clearPadding">
                                <hr />
                                <div>
                                    <ul>
                                        <li>
                                            <label>Khối</label>
                                            <span className="caret"></span>
                                            <ul className="nested">
                                                <li>
                                                    <a href="#">Mầm non</a>
                                                    <i>9</i>
                                                </li>
                                                <li>
                                                    <a href="#">Tiểu học </a>
                                                    <i>8</i>
                                                </li>
                                                <li>
                                                    <a href="#">Trung học cơ sở</a>
                                                    <i>11</i>
                                                </li>
                                                <li>
                                                    <a href="#">Trung học phổ thông</a>
                                                    <i>99</i>
                                                </li>
                                                <li>
                                                    <a href="#">Cao đẳng/Đại học</a>
                                                    <i>11</i>
                                                </li>

                                            </ul>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 clearPadding">
                                <hr />
                                <div>
                                    <ul>
                                        <li>
                                            <label>Loại công việc</label>
                                            <span className="caret"></span>
                                            <ul className="nested">
                                                <li>
                                                    <a href="#">Toàn thời gian </a>
                                                    <i>9</i>
                                                </li>
                                                <li>
                                                    <a href="#">Bán thời gian </a>
                                                    <i>8</i>
                                                </li>
                                                <li>
                                                    <a href="#">Tạm thời </a>
                                                    <i>11</i>
                                                </li>
                                                <li>
                                                    <a href="#">Mùa hè </a>
                                                    <i>99</i>
                                                </li>
                                                <li>
                                                    <a href="#">Sau giờ học </a>
                                                    <i>88</i>
                                                </li>
                                            </ul>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 clearPadding">
                                <hr />
                                <div>
                                    <ul>
                                        <li>
                                            <label>Loại hình tổ chức</label>
                                            <span className="caret"></span>
                                            <ul className="nested">
                                                <li>
                                                    <a href="#">Trường quốc tế</a>
                                                    <i>9</i>
                                                </li>
                                                <li>
                                                    <a href="#">Trường dân lập </a>
                                                    <i>8</i>
                                                </li>
                                                <li>
                                                    <a href="#">Trường công lập</a>
                                                    <i>11</i>
                                                </li>
                                                <li>
                                                    <a href="#">Trường liên kết</a>
                                                    <i>99</i>
                                                </li>

                                            </ul>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="search" className="container tab-pane clearPadding ">
                        <div>
                            <p>Từ khóa</p>
                            <div className="col-md-12 col-sm-12 col-lg-12  col-xl-12  col-12 clearPadding">
                                <span className="fa fa-search form-control-feedback"></span>
                                <input id="textsearch" className="form-control" type="text" placeholder="Từ khóa tìm kiếm" />
                            </div>
                            <p>Vị trí</p>
                            <div className="col-md-12 col-sm-12 col-lg-12  col-xl-12  col-12 clearPadding">
                                <span className="fa fa-map-marker form-control-feedback"></span>
                                <input id="diachi" className="form-control" type="text" placeholder="Từ khóa tìm kiếm" />
                            </div>

                            <div className="bankinh">
                                <select className="form-control" id="bankinh">
                                    <option>
                                        100m
                                        </option>
                                    <option>
                                        200m
                                        </option>
                                    <option>
                                        300m
                                        </option>
                                    <option>500m</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <div className="form-check">
                                <label className="form-check-label" for="check1">
                                    <input type="checkbox" className="form-check-input" name="lamviectainha" value="something" checked />Làm việc tại nhà
                                    </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label" for="check2">
                                    <input type="checkbox" className="form-check-input" value="something" />Toàn quốc
                                    </label>
                            </div>
                        </div>

                        <div>
                            <ul id="nganhnghe">
                                <li>
                                    <label>Ngành nghề</label>
                                    <span className="caret"></span>

                                    <ul className="nested">
                                        <li>
                                            <input type="checkbox" className="form-check-input" />
                                            <label>Người quản lý</label>
                                            <span className="caret"></span>
                                            <ul className="nested">
                                                <li>
                                                    <input type="checkbox" className="form-check-input" value="something" />Phó Hiệu trưởng</li>
                                                <li>
                                                    <input type="checkbox" className="form-check-input" value="something" />Trợ lý giám đốc</li>
                                                <li>
                                                    <input type="checkbox" className="form-check-input" />
                                                    <label>Chương trình giảng dạy</label>
                                                    <span className="caret"></span>
                                                    <ul className="nested">
                                                        <li>
                                                            <input type="checkbox" className="form-check-input" value="something" />Giám đốc học thuật</li>
                                                        <li>
                                                            <input type="checkbox" className="form-check-input" value="something" />Giám đốc chương trình dạy</li>
                                                        <li>
                                                            <input type="checkbox" className="form-check-input" value="something" />Chuyên gia</li>
                                                        <li>
                                                            <input type="checkbox" className="form-check-input" value="something" />Huấn luyện viên</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <input type="checkbox" className="form-check-input" value="something" />Công nghệ thông tin</li>
                                        <li>
                                            <input type="checkbox" className="form-check-input" value="something" />Nhân viên hỗ trợ</li>
                                        <li>
                                            <input type="checkbox" className="form-check-input" />
                                            <label>Dịch vụ khác</label>
                                            <span className="caret"></span>
                                            <ul className="nested">
                                                <li>
                                                    <input type="checkbox" className="form-check-input" value="something" />Chương trình giảng dạy</li>
                                                <li>
                                                    <input type="checkbox" className="form-check-input" value="something" />Dịch vụ khách hàng</li>
                                                <li>
                                                    <input type="checkbox" className="form-check-input" value="something" />Tiếp thị</li>
                                                <li>
                                                    <input type="checkbox" className="form-check-input" value="something" />Tài trợ</li>
                                            </ul>

                                        </li>

                                    </ul>

                                </li>
                            </ul>
                        </div>


                        <div>
                            <ul id="khoi">
                                <li>
                                    <label>Khối</label>
                                    <span className="caret"></span>
                                    <ul className="nested">

                                        <li>
                                            <input type="checkbox" className="form-check-input" value="something" />Mầm non</li>
                                        <li>
                                            <input type="checkbox" className="form-check-input" value="something" />Tiểu học</li>
                                        <li>
                                            <input type="checkbox" className="form-check-input" value="something" />Trung học cơ sở</li>
                                        <li>
                                            <input type="checkbox" className="form-check-input" value="something" />Trung học phổ thông</li>

                                        <li>
                                            <input type="checkbox" className="form-check-input" value="something" />Cao đẳng/Đại học</li>

                                    </ul>

                                </li>
                            </ul>
                        </div>


                        <div>
                            <ul id="loaicongviec">
                                <li>
                                    <label>Loại công việc</label>
                                    <span className="caret"></span>
                                    <ul className="nested">
                                        <li>
                                            <input type="checkbox" className="form-check-input" value="something" />Toàn thời gian</li>

                                        <li>
                                            <input type="checkbox" className="form-check-input" value="something" />Bán thời gian</li>
                                        <li>
                                            <input type="checkbox" className="form-check-input" value="something" />Tạm thời</li>
                                        <li>
                                            <input type="checkbox" className="form-check-input" value="something" />Mùa hè</li>
                                        <li>
                                            <input type="checkbox" className="form-check-input" value="something" />Sau giờ học</li>


                                    </ul>

                                </li>
                            </ul>
                        </div>

                        <div>
                            <ul id="loaihinhtochuc">
                                <li>

                                    <label>Loại hình tổ chức</label>
                                    <span className="caret"></span>
                                    <ul className="nested">

                                        <li>
                                            <input type="checkbox" className="form-check-input" value="something" />Trường quốc tế</li>
                                        <li>
                                            <input type="checkbox" className="form-check-input" value="something" />Trường dân lập</li>
                                        <li>
                                            <input type="checkbox" className="form-check-input" value="something" />Trường liên kết</li>
                                        <li>
                                            <input type="checkbox" className="form-check-input" value="something" />Trường công lập</li>

                                    </ul>

                                </li>
                            </ul>
                        </div>

                        <div>
                            <input className="btnSearch" type="submit" value="Tìm kiếm" />
                        </div>
                    </div>

                </div>
            </div >
        )
    }
}
// the i
class I extends React.Component {
    render() {
        return (
            <i className={this.props.class}>{this.props.name}</i>
        )
    }
}
