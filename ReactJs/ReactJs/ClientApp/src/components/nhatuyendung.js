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
import { Button } from './Home';
export class NhaTuyenDung extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            school: [
                {name:"Trường Mầm Non Song Ngữ",job:"12",noidung:"Top 5 trường chuẩn quốc tế"},
                { name: "Trường Mầm Non Song Ngữ", job: "12", noidung: "Top 5 trường chuẩn quốc tế" },
                { name: "Trường Mầm Non Song Ngữ", job: "12", noidung: "Top 5 trường chuẩn quốc tế" },
                { name: "Trường Mầm Non Song Ngữ", job: "12", noidung: "Top 5 trường chuẩn quốc tế" },
                { name: "Trường Mầm Non Song Ngữ", job: "12", noidung: "Top 5 trường chuẩn quốc tế" },
                { name: "Trường Mầm Non Song Ngữ", job: "12", noidung: "Top 5 trường chuẩn quốc tế" },
                { name: "Trường Mầm Non Song Ngữ", job: "12", noidung: "Top 5 trường chuẩn quốc tế" },
                { name: "Trường Mầm Non Song Ngữ", job: "12", noidung: "Top 5 trường chuẩn quốc tế" },

            ]
        }
    }

    render() {
        return (
            <div className="searchEmployer">
                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                    <h4>Tìm kiếm nhà tuyển dụng</h4>
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12 col-12 " >
                            <TimKiem />
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12 col-12 " >
                            {
                                this.state.school.map(function (item) {
                                    return (
                                        <School name={item.name} school={item.school} job={item.job} />
                                        )
                                })
                            }
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        )
    }
}
export class TimKiem extends React.Component {
    render() {
        return (
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 left">
                <input type="text" className="form-control" placeholder="Từ khóa" />
                <select className="form-control">
                    <option>Tất cả</option>
                    <option>Trường quốc tế</option>
                    <option>Trường dân lập</option>
                    <option>Trường công lập</option>
                    <option>Trường liên kết</option>

                </select>
                <button className="btnSearch">Tìm kiếm</button>
            </div>
        )
    }
}
export class School extends React.Component {
    render() {
        return (
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 school">
                <div className="row col-lg-12 col-md-12 col-sm-12 col-12 ">
                    <h4>
                        <div className="textSchool">
                            <a href="#"> {this.props.name}</a>
                            <i className="textJob">
                                <a href="#">{this.props.job}công việc</a>
                            </i>
                        </div>
                    </h4>
                </div>
                <div className="row col-lg-12 col-md-12 col-sm-12 col-12 infJob">
                    <div className="col-lg-9 col-md-9 col-sm-9 col-12 clearPadding">
                        <p>{this.props.noidung}</p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-12 clearPadding">
                        <img src="img/logo.JPG" />
                    </div>
                </div>
            </div>
        )
    }
}
