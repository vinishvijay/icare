import React, { Component } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import 'react-phone-input-2/lib/material.css'

class Booking extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "React"
        };
        this.onChangeValue = this.onChangeValue.bind(this);
    }

    onChangeValue(event) {
        console.log(event.target.value);
    }

    render() {

        return (
            <div>
                {/* <!-- Begin page  --> */}
                <div id="layout-wrapper">
                    <header id="page-topbar">
                        <div class="navbar-header">
                            <div class="d-flex">
                                {/* <!-- LOGO  --> */}
                                <div class="navbar-brand-box">
                                    <a href="index.html" class="logo logo-dark">
                                        <span class="logo-sm">
                                            <img src="assets/images/logo.svg" alt="" height="22" />
                                        </span>
                                        <span class="logo-lg">
                                            <img src="assets/images/logo-dark.png" alt="" height="17" />
                                        </span>
                                    </a>
                                    <a href="booking.html" class="logo logo-light">
                                        <span class="logo-sm">
                                            <img src="%PUBLIC_URL%/assets/img/logo/icare-virtual-logo-white.png" alt="" height="40" />
                                        </span>
                                        <span class="logo-lg">
                                            <img src="%PUBLIC_URL%/assets/img/logo/icare-virtual-logo-white.png" alt="" height="40" />
                                        </span>
                                    </a>
                                </div>
                                <button type="button" class="btn btn-sm px-3 font-size-16 d-lg-none header-item waves-effect waves-light" data-toggle="collapse" data-target="#topnav-menu-content">
                                    <i class="fa fa-fw fa-bars"></i>
                                </button>
                                {/* <!-- App Search --> */}
                                <form class="app-search d-none d-lg-block">
                                    <div class="position-relative">
                                        <input type="text" class="form-control" placeholder="Search..." />
                                        <span class="bx bx-search-alt"></span>
                                    </div>
                                </form>
                            </div>
                            <div class="d-flex">
                                <div class="dropdown d-inline-block d-lg-none ml-2">
                                    <button type="button" class="btn header-item noti-icon waves-effect" id="page-header-search-dropdown"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="mdi mdi-magnify"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                                        aria-labelledby="page-header-search-dropdown">
                                        <form class="p-3">
                                            <div class="form-group m-0">
                                                <div class="input-group">
                                                    <input type="text" class="form-control" placeholder="Search ..." aria-label="Recipient's username" />
                                                    <div class="input-group-append">
                                                        <button class="btn btn-primary" type="submit"><i class="mdi mdi-magnify"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="dropdown d-inline-block">
                                    <button type="button" class="btn header-item waves-effect" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img id="header-lang-img" src="%PUBLIC_URL%/assets/images/flags/us.jpg" alt="Header Language" height="16" />
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        {/* <!-- item --> */}
                                        <a href="javascript:void(0);" class="dropdown-item notify-item language" data-lang="eng">
                                            <img src="assets/images/flags/us.jpg" alt="user-image" class="mr-1" height="12" /> <span class="align-middle">English</span>
                                        </a>
                                        {/* <!-- item --> */}
                                        <a href="javascript:void(0);" class="dropdown-item notify-item language" data-lang="sp">
                                            <img src="assets/images/flags/spain.jpg" alt="user-image" class="mr-1" height="12" /> <span class="align-middle">French</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="dropdown d-none d-lg-inline-block ml-1">
                                    <button type="button" class="btn header-item noti-icon waves-effect"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="bx bx-customize"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                        <div class="px-lg-2">
                                            <div class="row no-gutters">
                                                <div class="col">
                                                    <a class="dropdown-icon-item" href="#">
                                                        <img src="assets/images/brands/github.png" alt="Github" />
                                                        <span>Virtual Care Appoinements</span>
                                                    </a>
                                                </div>
                                                <div class="col">
                                                    <a class="dropdown-icon-item" href="#">
                                                        <img src="assets/images/brands/bitbucket.png" alt="bitbucket" />
                                                        <span>Durham Patients</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="dropdown d-none d-lg-inline-block ml-1">
                                    <button type="button" class="btn header-item noti-icon waves-effect" data-toggle="fullscreen">
                                        <i class="bx bx-fullscreen"></i>
                                    </button>
                                </div>
                                <div class="dropdown d-inline-block">
                                    <button type="button" class="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="bx bx-bell bx-tada"></i>
                                        <span class="badge badge-danger badge-pill">3</span>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                                        aria-labelledby="page-header-notifications-dropdown">
                                        <div class="p-3">
                                            <div class="row align-items-center">
                                                <div class="col">
                                                    <h6 class="m-0" key="t-notifications"> Notifications </h6>
                                                </div>
                                                <div class="col-auto">
                                                    <a href="#!" class="small" key="t-view-all"> View All</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-simplebar>
                                            <a href="#" class="text-reset notification-item">
                                                <div class="media">
                                                    <div class="avatar-xs mr-3">
                                                        <span class="avatar-title bg-primary rounded-circle font-size-16">
                                                            <i class="bx bx-cart"></i>
                                                        </span>
                                                    </div>
                                                    <div class="media-body">
                                                        <h6 class="mt-0 mb-1" key="t-your-order">Your order is placed</h6>
                                                        <div class="font-size-12 text-muted">
                                                            <p class="mb-1" key="t-grammer">If several languages coalesce the grammar</p>
                                                            <p class="mb-0">
                                                                <i class="mdi mdi-clock-outline"></i>
                                                                <span key="t-min-ago">3 min ago</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" class="text-reset notification-item">
                                                <div class="media">
                                                    <img src="assets/images/users/avatar-3.jpg"
                                                        class="mr-3 rounded-circle avatar-xs" alt="user-pic" />
                                                    <div class="media-body">
                                                        <h6 class="mt-0 mb-1">James Lemire</h6>
                                                        <div class="font-size-12 text-muted">
                                                            <p class="mb-1" key="t-simplified">It will seem like simplified English.</p>
                                                            <p class="mb-0">
                                                                <i class="mdi mdi-clock-outline"></i>
                                                                <span key="t-hours-ago">1 hours ago</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" class="text-reset notification-item">
                                                <div class="media">
                                                    <div class="avatar-xs mr-3">
                                                        <span class="avatar-title bg-success rounded-circle font-size-16">
                                                            <i class="bx bx-badge-check"></i>
                                                        </span>
                                                    </div>
                                                    <div class="media-body">
                                                        <h6 class="mt-0 mb-1" key="t-shipped">Your item is shipped</h6>
                                                        <div class="font-size-12 text-muted">
                                                            <p class="mb-1" key="t-grammer">If several languages coalesce the grammar</p>
                                                            <p class="mb-0">
                                                                <i class="mdi mdi-clock-outline"></i>
                                                                <span key="t-min-ago">3 min ago</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" class="text-reset notification-item">
                                                <div class="media">
                                                    <img src="assets/images/users/avatar-4.jpg"
                                                        class="mr-3 rounded-circle avatar-xs" alt="user-pic" />
                                                    <div class="media-body">
                                                        <h6 class="mt-0 mb-1">Salena Layfield</h6>
                                                        <div class="font-size-12 text-muted">
                                                            <p class="mb-1" key="t-occidental">As a skeptical Cambridge friend of mine occidental.</p>
                                                            <p class="mb-0">
                                                                <i class="mdi mdi-clock-outline"></i>
                                                                <span key="t-hours-ago">1 hours ago</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="p-2 border-top">
                                            <a class="btn btn-sm btn-link font-size-14 btn-block text-center" href="javascript:void(0)">
                                                <i class="mdi mdi-arrow-right-circle mr-1"></i> <span key="t-view-more">View More..</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div class="topnav">
                        <div class="container-fluid">
                            <nav class="navbar navbar-light navbar-expand-lg topnav-menu">
                                <div class="collapse navbar-collapse" id="topnav-menu-content">
                                    <ul class="navbar-nav">
                                        <li class="nav-item ">
                                            <a class="nav-link arrow-none" href="#" id="topnav-dashboard" role="button"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="bx bx-home-circle mr-2"></i><span key="t-dashboards">Home</span>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link arrow-none" href="#" id="topnav-uielement" role="button"
                                                data-toggle="" aria-haspopup="true" aria-expanded="false">
                                                <i class="bx bx-tone mr-2"></i>
                                                <span key="t-ui-elements">Visit Type</span>
                                            </a>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-pages" role="button"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="bx bx-customize mr-2"></i><span key="t-apps">Routine Medical Care</span>
                                            </a>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-components" role="button"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="bx bx-collection mr-2"></i><span key="t-components">Mental Health</span>
                                            </a>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-more" role="button"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="bx bx-file mr-2"></i><span key="t-extra-pages">Sexual Health</span>
                                            </a>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-layout" role="button"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="bx bx-layout mr-2"></i><span key="t-layouts">Vaccine</span>
                                            </a>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-more" role="button"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="bx bx-file mr-2"></i><span key="t-extra-pages">Travel Medicine</span>
                                            </a>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-layout" role="button"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="bx bx-layout mr-2"></i><span key="t-layouts">Founder</span>
                                            </a>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-more" role="button"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="bx bx-file mr-2"></i><span key="t-extra-pages">Contact US</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>

                    <div class="main-content">
                        <div class="page-content">
                            <div class="container-fluid">

                                {/* <!-- start page title  --> */}
                                <div class="row">
                                    <div class="col-12">
                                        <div class="page-title-box d-flex align-items-center justify-content-between">
                                            <h2 class="mb-0 font-size-18">Virtual Care Appointment</h2>
                                            <div class="page-title-right">
                                                <ol class="breadcrumb m-0">
                                                    <li class="breadcrumb-item"><a href="javascript: void(0);">HOME</a></li>
                                                    <li class="breadcrumb-item active">VIRTUAL CARE APPOINTMENT</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end page title  --> */}
                                <div class="row">
                                    <div class="col-xl-8">

                                        <div class="card">
                                            <div class="card-body">
                                                <h4 class="card-title">Visitor Token</h4>
                                                {/* <p class="card-title-desc mb-3">
                              You can use a link with the
                              <code class="highlighter-rouge">href</code>
                              attribute, or a button with the
                              <code class="highlighter-rouge">data-target</code>
                              attribute. In both cases, the
                              <code class="highlighter-rouge">data-toggle="collapse"</code>
                              is required.
                           </p> */}
                                                <p>
                                                    <button class="btn btn-primary mt-1" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="true" aria-controls="collapseExample">
                                                        Are you a Returning Visitor ?
                              </button>
                                                </p>
                                                <div class="collapse" id="collapseExample">
                                                    <div class="card card-body mb-0">
                                                        <h5 class="card-title mb-4">Registration Token</h5>
                                                        <form class="form-inline">
                                                            <div class="form-group position-relative">
                                                                <input type="text" class="form-control mb-2 mr-sm-3" id="validationTooltip03" placeholder="Enter Token Number" required />
                                                                <div class="invalid-tooltip">
                                                                    Please provide a valid city.
                                       </div>
                                                            </div>
                                                            <button type="submit" class="btn btn-primary mb-2">Submit</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-4">
                                        <div class="card bg-primary">
                                            <div class="card-body">
                                                <div class="row align-items-center">
                                                    <div class="col-sm-8">
                                                        <p class="text-white font-size-18">Call: <b>1-855-icare-33</b> or register online for a<i class="mdi mdi-arrow-right"></i></p>
                                                        <div class="mt-4" >
                                                            <a href="javascript: void(0);" class="btn btn-success waves-effect waves-light" style={{ fontSize: 15, fontWeight: 500 }}>Virtual Care Appointment</a>
                                                        </div>

                                                    </div>
                                                    <div class="col-sm-4">
                                                        <div class="mt-4 mt-sm-0">
                                                            <img src="https://www.jivansetu.com/registrationTheme/lib/hms_file/HMS%20Images/cms-banner-img.svg" class="img-fluid" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="card">
                                            <div class="card-body">
                                                <h4 class="card-title">Personal Information</h4>
                                                {/* <p class="card-title-desc">A mobile and touch friendly input spinner component for Bootstrap</p> */}
                                                <form>
                                                    <div class="row">
                                                        <div class="col-lg-4">
                                                            <div class="form-group">
                                                                <label for="formrow-inputCity">First Name</label>
                                                                <input type="text" class="form-control" id="formrow-inputCity" />
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4">
                                                            <div class="form-group">
                                                                <label for="formrow-inputZip">Last Name</label>
                                                                <input type="text" class="form-control" id="formrow-inputZip" />
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4">
                                                            <div class="form-group">
                                                                <label for="formrow-inputState">Gender</label>
                                                                <div class="form-check mb-3">
                                                                    <div class="d-inline-block col-xl-3">
                                                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked="" />
                                                                        <label class="form-check-label" for="exampleRadios1">
                                                                            Male
                                             </label>
                                                                    </div>
                                                                    <div class="d-inline-block col-xl-3">
                                                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option1" checked="" />
                                                                        <label class="form-check-label" for="exampleRadios2">
                                                                            Female
                                             </label>
                                                                    </div>
                                                                    <div class="d-inline-block col-xl-3">
                                                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option1" checked="" />
                                                                        <label class="form-check-label" for="exampleRadios3">
                                                                            Others
                                             </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-lg-4">
                                                            <div class="form-group">
                                                                <label for="example-date-input">Date of Birth</label>
                                                                <input class="form-control" type="date" value="" id="example-date-input" />
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4">
                                                            <div class="form-group">
                                                                <label for="formrow-inputZip">Age</label>
                                                                <input type="text" class="form-control" id="formrow-inputZip" />
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4">
                                                            <div class="form-group">
                                                                <label for="formrow-inputState">Blood Type</label>
                                                                <select id="formrow-inputState" class="form-control">
                                                                    <option value="">Select blood type</option>
                                                                    <option value="+A">+A</option>
                                                                    <option value="-A">-A</option>
                                                                    <option value="+B">+B</option>
                                                                    <option value="-B">-B</option>
                                                                    <option value="+O">+O</option>
                                                                    <option value="-O">-O</option>
                                                                    <option value="+AB">+AB</option>
                                                                    <option value="-AB">-AB</option>
                                                                    <option value="-">-</option>
                                                                </select>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-lg-4">
                                                            <div class="form-group mb-0">
                                                                <label for="input-email">Email address::</label>
                                                                <input id="input-email" class="form-control input-mask" data-inputmask="'alias': 'email'" />
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4">
                                                            <div class="form-group">
                                                                <label for="formrow-inputZip">Phone Number</label>
                                                                <input type="text" class="form-control" id="formrow-inputZip" />
                                                                <PhoneInput
                                                                    onlyCountries={['ca', 'us']}
                                                                    country={'ca'}
                                                                    value={this.state.phone}
                                                                    onChange={phone => this.setState({ phone })}
                                                                    inputClass="form-control"
                                                                    inputStyle={{
                                                                                                 }}
                                                        />
                                    </div>
                                                        </div>
                                                        <div class="col-lg-4">
                                                            <div class="form-group">
                                                                <label for="formrow-inputState">Address</label>
                                                                <input type="text" class="form-control" id="formrow-inputZip" />

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-lg-4">
                                                            <div class="form-group mb-0">
                                                                <label for="input-email">City</label>
                                                                <input id="input-email" class="form-control input-mask" data-inputmask="'alias': 'email'" />
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4">
                                                            <div class="form-group">
                                                                <label for="formrow-inputZip">Province</label>
                                                                <input type="text" class="form-control" id="formrow-inputZip" />
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4">
                                                            <div class="form-group">
                                                                <label for="formrow-inputState">Postal Code</label>
                                                                <input type="text" class="form-control" id="formrow-inputZip" />

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-lg-4">
                                                            <div class="form-group mb-0">
                                                                <label for="input-email">Clinic ID</label>
                                                                <input id="input-email" class="form-control input-mask" data-inputmask="'alias': 'email'" />
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4">
                                                            <div class="mt-4 mt-lg-0">
                                                                <h5 class="font-size-14 mb-3">Do you have a regular family doctor ? </h5>
                                                                <div class="form-check mb-3" >
                                                                    <div class="d-inline-block col-xl-3">
                                                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked={true} />
                                                                        <label class="form-check-label" for="exampleRadios1">
                                                                            Yes
                                             </label>
                                                                    </div>
                                                                    <div class="d-inline-block col-xl-3">
                                                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option1" checked="" />
                                                                        <label class="form-check-label" for="exampleRadios2">
                                                                            No
                                             </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4">
                                                            <div class="form-group">
                                                                <label for="formrow-inputState">If Yes</label>
                                                                <input type="text" class="form-control" id="formrow-inputZip" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-lg-4">
                                                            <div class="form-group mb-0">
                                                                <label for="input-email">Health Card Number</label>
                                                                <input id="input-email" class="form-control input-mask" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        {/* <!-- end select2  --> */}
                                    </div>
                                </div>
                                {/* <!-- end row  --> */}
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="card">
                                            <form>
                                                <div class="card-body">
                                                    <h4 class="card-title">Background</h4>
                                                    {/* <p class="card-title-desc">A mobile and touch friendly input spinner component for Bootstrap</p> */}
                                                    <div class="row">
                                                        <div class="col-xl-3">
                                                            <div class="form-group">
                                                                <label for="formrow-inputState">Medical problems</label>
                                                                <div class="form-check mb-3" style={{ paddingTop: 10 }}>
                                                                    <div class="d-inline-block col-xl-3">
                                                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                                                        <label class="form-check-label" for="exampleRadios1">
                                                                            Yes
                                             </label>
                                                                    </div>
                                                                    <div class="d-inline-block col-xl-3">
                                                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option1" checked="" />
                                                                        <label class="form-check-label" for="exampleRadios2">
                                                                            No
                                             </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6">
                                                            <div class="form-group mb-0">
                                                                <label for="input-email">If Yes</label>
                                                                <input id="input-email" class="form-control input-mask" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-xl-3">
                                                            <div class="form-group">
                                                                <label for="formrow-inputState">Medications</label>
                                                                <div class="form-check mb-3" style={{ paddingTop: 10 }}>
                                                                    <div class="d-inline-block col-xl-3">
                                                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option1" checked="" />
                                                                        <label class="form-check-label" for="exampleRadios3">
                                                                            Yes
                                             </label>
                                                                    </div>
                                                                    <div class="d-inline-block col-xl-3">
                                                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="option1" checked="" />
                                                                        <label class="form-check-label" for="exampleRadios4">
                                                                            No
                                             </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6">
                                                            <div class="form-group mb-0">
                                                                <label for="input-email">If Yes</label>
                                                                <input id="input-email" class="form-control input-mask" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-xl-3">
                                                            <div class="form-group">
                                                                <label for="formrow-inputState">Allergies</label>
                                                                <div class="form-check mb-3" style={{ paddingTop: 10 }}>
                                                                    <div class="d-inline-block col-xl-3">
                                                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked="" />
                                                                        <label class="form-check-label" for="exampleRadios1">
                                                                            Yes
                                             </label>
                                                                    </div>
                                                                    <div class="d-inline-block col-xl-3">
                                                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option1" checked="" />
                                                                        <label class="form-check-label" for="exampleRadios2">
                                                                            No
                                             </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6">
                                                            <div class="form-group mb-0">
                                                                <label for="input-email">If Yes</label>
                                                                <input id="input-email" class="form-control input-mask" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    {/* <!-- end select2  --> */}
                                </div>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="card">
                                            <form>
                                                <div class="card-body">
                                                    <h4 class="card-title">Do you have any of the below</h4>
                                                    <p class="card-title-desc">A mobile and touch friendly input spinner component for Bootstrap</p>
                                                    <div class="row">
                                                        <div class="col-xl-3">
                                                            <div class="form-group">
                                                                <label for="formrow-inputState">Cough</label>
                                                                <div class="form-check mb-3">
                                                                    <div class="d-inline-block col-xl-3">
                                                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked="" />
                                                                        <label class="form-check-label" for="exampleRadios1">
                                                                            Yes
                                             </label>
                                                                    </div>
                                                                    <div class="d-inline-block col-xl-3">
                                                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option1" checked="" />
                                                                        <label class="form-check-label" for="exampleRadios2">
                                                                            No
                                             </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-3">
                                                            <div class="form-group">
                                                                <label for="formrow-inputState">Fever 38 or greater</label>
                                                                <div class="form-check mb-3">
                                                                    <div class="d-inline-block col-xl-3">
                                                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked="" />
                                                                        <label class="form-check-label" for="exampleRadios1">
                                                                            Yes
                                             </label>
                                                                    </div>
                                                                    <div class="d-inline-block col-xl-3">
                                                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option1" checked="" />
                                                                        <label class="form-check-label" for="exampleRadios2">
                                                                            No
                                             </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-3">
                                                            <div class="form-group">
                                                                <label for="formrow-inputState">Shortness of breath or chest discomfort</label>
                                                                <div class="form-check mb-3">
                                                                    <div class="d-inline-block col-xl-3">
                                                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked="" />
                                                                        <label class="form-check-label" for="exampleRadios1">
                                                                            Yes
                                             </label>
                                                                    </div>
                                                                    <div class="d-inline-block col-xl-3">
                                                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option1" checked="" />
                                                                        <label class="form-check-label" for="exampleRadios2">
                                                                            No
                                             </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-3">
                                                            <div class="form-group">
                                                                <label for="formrow-inputState">Runny Nose</label>
                                                                <div class="form-check mb-3">
                                                                    <div class="d-inline-block col-xl-3">
                                                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked="" />
                                                                        <label class="form-check-label" for="exampleRadios1">
                                                                            Yes
                                             </label>
                                                                    </div>
                                                                    <div class="d-inline-block col-xl-3">
                                                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option1" checked="" />
                                                                        <label class="form-check-label" for="exampleRadios2">
                                                                            No
                                             </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-xl-3">
                                                            <div class="form-group">
                                                                <label for="formrow-inputState">Vomiting</label>
                                                                <div class="form-check mb-3">
                                                                    <div class="d-inline-block col-xl-3">
                                                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked="" />
                                                                        <label class="form-check-label" for="exampleRadios1">
                                                                            Yes
                                             </label>
                                                                    </div>
                                                                    <div class="d-inline-block col-xl-3">
                                                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option1" checked="" />
                                                                        <label class="form-check-label" for="exampleRadios2">
                                                                            No
                                             </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-3">
                                                            <div class="form-group">
                                                                <label for="formrow-inputState">Diarrhea</label>
                                                                <div class="form-check mb-3">
                                                                    <div class="d-inline-block col-xl-3">
                                                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked="" />
                                                                        <label class="form-check-label" for="exampleRadios1">
                                                                            Yes
                                             </label>
                                                                    </div>
                                                                    <div class="d-inline-block col-xl-3">
                                                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option1" checked="" />
                                                                        <label class="form-check-label" for="exampleRadios2">
                                                                            No
                                             </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-3">
                                                            <div class="form-group">
                                                                <label for="formrow-inputState">Abdominal Pain</label>
                                                                <div class="form-check mb-3">
                                                                    <div class="d-inline-block col-xl-3">
                                                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked="" />
                                                                        <label class="form-check-label" for="exampleRadios1">
                                                                            Yes
                                             </label>
                                                                    </div>
                                                                    <div class="d-inline-block col-xl-3">
                                                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option1" checked="" />
                                                                        <label class="form-check-label" for="exampleRadios2">
                                                                            No
                                             </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-3">
                                                            <div class="form-group">
                                                                <label for="formrow-inputState">Rash</label>
                                                                <div class="form-check mb-3">
                                                                    <div class="d-inline-block col-xl-3">
                                                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked="" />
                                                                        <label class="form-check-label" for="exampleRadios1">
                                                                            Yes
                                             </label>
                                                                    </div>
                                                                    <div class="d-inline-block col-xl-3">
                                                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option1" checked="" />
                                                                        <label class="form-check-label" for="exampleRadios2">
                                                                            No
                                             </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-xl-3">
                                                            <div class="form-group">
                                                                <label for="formrow-inputState">Eye Discharge</label>
                                                                <div class="form-check mb-3">
                                                                    <div class="d-inline-block col-xl-3">
                                                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked="" />
                                                                        <label class="form-check-label" for="exampleRadios1">
                                                                            Yes
                                             </label>
                                                                    </div>
                                                                    <div class="d-inline-block col-xl-3">
                                                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option1" checked="" />
                                                                        <label class="form-check-label" for="exampleRadios2">
                                                                            No
                                             </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-3">
                                                            <div class="form-group">
                                                                <label for="formrow-inputState">Travel in last 14 days outside of Ontario</label>
                                                                <div class="form-check mb-3">
                                                                    <div class="d-inline-block col-xl-3">
                                                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked="" />
                                                                        <label class="form-check-label" for="exampleRadios1">
                                                                            Yes
                                             </label>
                                                                    </div>
                                                                    <div class="d-inline-block col-xl-3">
                                                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option1" checked="" />
                                                                        <label class="form-check-label" for="exampleRadios2">
                                                                            No
                                             </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-3">
                                                            <div class="form-group">
                                                                <label for="formrow-inputState">Contact with person diagnosed positive with COVID 19 or other communicable disease in last 14 days</label>
                                                                <div class="form-check mb-3">
                                                                    <div class="d-inline-block col-xl-3">
                                                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked="" />
                                                                        <label class="form-check-label" for="exampleRadios1">
                                                                            Yes
                                             </label>
                                                                    </div>
                                                                    <div class="d-inline-block col-xl-3">
                                                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option1" checked="" />
                                                                        <label class="form-check-label" for="exampleRadios2">
                                                                            No
                                             </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-3">
                                                            <div class="form-group">
                                                                <label for="formrow-inputState">Have you been discharged from hospital in the last 14 days</label>
                                                                <div class="form-check mb-3">
                                                                    <div class="d-inline-block col-xl-3">
                                                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked="" />
                                                                        <label class="form-check-label" for="exampleRadios1">
                                                                            Yes
                                             </label>
                                                                    </div>
                                                                    <div class="d-inline-block col-xl-3">
                                                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option1" checked="" />
                                                                        <label class="form-check-label" for="exampleRadios2">
                                                                            No
                                             </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label>If you answered yes to any of the questions above please describe</label>
                                                        <div>
                                                            <textarea required="" class="form-control" rows="5" spellcheck="false"></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label>
                                                            If you answered yes to any of the questions above please describe
                                 </label>
                                                        <div>
                                                            <textarea required="" class="form-control" rows="5" spellcheck="false"></textarea>


                                                            <GoogleReCaptchaProvider
                                                                reCaptchaKey="6LdGDOYZAAAAAJEaJBNNsTMc9OXjyHIjiJHofb75"
                                                                scriptProps={{
                                                                    async: false, // optional, default to false,
                                                                    defer: false // optional, default to false

                                                                }}
                                                            />
                                                        </div>


                                                    </div>
                                                    <div>
                                                        <button type="button" class="btn btn-primary btn-lg btn-block waves-effect waves-light mb-1">Submit</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    {/* <!-- end select2  --> */}
                                </div>
                            </div>
                            {/* <!-- end row  --> */}
                        </div>
                        {/* <!-- container-fluid  --> */}
                    </div>
                    {/* <!-- End Page-content  --> */}
                    <footer class="footer">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-sm-6">
                                    <script>document.write(new Date().getFullYear())</script> © Virtual Care Powered by Connected Care Health Espresso.
               </div>
                                <div class="col-sm-6">
                                    <div class="text-sm-right d-none d-sm-block">
                                        Design & Develop by AI Hub
                  </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
                {/* <!-- end main content --> */}
            </div>

        )
    }
}
export default Booking