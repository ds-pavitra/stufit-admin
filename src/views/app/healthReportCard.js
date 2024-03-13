import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import ReactDOMServer from 'react-dom/server';
import 'react-tagsinput/react-tagsinput.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'rc-switch/assets/index.css';
import { apiBaseUrl, apiRequestAsync } from 'constants/defaultValues';
import lucknowSmartCity from 'assets/logos/lucknowSmartCity.png';
import stufitCardBg from 'assets/logos/stufitCardBg.jpg';
import stufitNew from 'assets/logos/stufitNew.png';
import AddReportModal from 'containers/pages/AddReportModal';
// import UpdateReportModal from 'containers/pages/UpdateReportModal';
// import { FormDataProvider } from 'containers/pages/FormDataContext';
import { FormDataProviderReport } from 'containers/pages/AddReportFormData';

const HealthReportCard = ({ match }) => {
    const { id, profileid } = match.params;
    console.log(id);
    console.log(profileid);
    const [formData, setformData] = useState();
    const [modalOpen, setModalOpen] = useState(false);
    const [schoolLogo, setSchoolLogo] = useState('');

    const [reportObject, setReportObject] = useState({
        roleUpdate: 'UpdateReport',
        roleId: '',
    });


    const getUserRole = () => {
        const userCurrentRole = JSON.parse(
            localStorage.getItem('stufit_current_user')
        );
        const userRole = userCurrentRole.uid.user_role;
        return userRole;
    };

    const userRole = getUserRole();

    const apiUrl = `${apiBaseUrl}/profile/${profileid}/report/${id}`;
    const fetchDataReports = async () => {
        apiRequestAsync('get', apiUrl, null, {}, true)
            .then((reportData) => {
                if (reportData.response.code === 200) {
                    setformData(reportData.data[0]);
                }
                return null;
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    useEffect(() => {
        const userCurrentRole = JSON.parse(
            localStorage.getItem('stufit_current_user')
        );
        setSchoolLogo(userCurrentRole.uid.image);
        console.log(userCurrentRole.uid.image);

        window.handleEdit = (reportid) => {
            console.log(`Edit button clicked for reportid: ${reportid}`);
            setReportObject({
                roleUpdate: 'UpdateReport',
                roleId: [reportid, profileid],
            });
            setModalOpen(!modalOpen);
        };

        function printReport(items) {
            function formatDate(dateString) {
                if (!dateString || dateString === '0000-00-00') {
                    return 'Na';
                }

                const date = new Date(dateString);
                const day = date.getDate().toString().padStart(2, '0');
                const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Note: Month is zero-based
                const year = date.getFullYear();

                return `${day}/${month}/${year}`;
            }

            const celsiusToFarhenheit = (celsius) => {
                if (typeof celsius === 'number') {
                    const fahrenheit = (celsius * 9) / 5 + 32;
                    return `${fahrenheit.toFixed(2)} ℉`;
                }
                return '98 ℉';
            };

            function calculateIdealMetricsFromBMI(bmi, gender, heightInCm) {
                // Ideal Body Weight (IBW) calculation
                const ibw =
                    gender.toLowerCase() === 'male'
                        ? 50 + 2.3 * (heightInCm - 152.4)
                        : 45.5 + 2.3 * (heightInCm - 152.4);

                // Total Daily Energy Expenditure (TDEE) calculation without considering age
                const tdee =
                    gender.toLowerCase() === 'male'
                        ? 88.362 + 13.397 * ibw + 4.799 * heightInCm
                        : 447.593 + 9.247 * ibw + 3.098 * heightInCm;

                return {
                    idealBodyWeight: ibw.toFixed(),
                    estimatedCaloricIntake: tdee.toFixed(),
                };
            }

            // Example usage:
            const bmiValue = items.pa_bmi; // Replace with the actual BMI value
            const gender = items.std_gender; // Replace with 'female' if applicable
            const heightInCm = items.pa_height; // Replace with the actual height in centimeters

            const idealMetrics = calculateIdealMetricsFromBMI(
                bmiValue,
                gender,
                heightInCm
            );
            console.log(idealMetrics);

            // Example usage:
            // const today = new Date(items.created_at);
            // const formattedDate = formatDate(today);

            const renderQRCode = (value) =>
                ReactDOMServer.renderToString(<QRCodeSVG value={value} />);
            if (items) {
                document.body.innerHTML = `
                
                <!DOCTYPE html>
                <html lang="en">
                
                <head>
                    <title>Stufit</title>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <link rel="shortcut icon" type="image/x-icon"
                        href="${stufitNew}" />
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
                    <style>
                        body {
                            background-color: #5780B6;
                        }
                
                        .health-card-body {
                            padding: 2em;
                            background-color: #fff;
                            box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
                            margin: 0 auto;
                            width: 24cm;
                            height: 40cm;
                            margin-bottom: 0.5cm;
                        }
                
                        page[size="A4"] {
                            background: white;
                            margin: 0 auto;
                            width: 24cm;
                            height: 40cm;
                            display: block;
                            margin-bottom: 0.5cm;
                            box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
                            position: relative
                        }
                
                        @media print {
                
                            body,
                            .health-card-body,
                            page[size="A4"] {
                                margin: 0;
                                box-shadow: 0;
                                margin: 0 auto;
                                width: 100%;
                                height: 40;
                            }
                            .print-btn button {
                                display: none;
                            }
                            .printClass {
                                margin-left: 60px;
                            }
                        }
                
                        .health-card-body .container-fluid {
                            height: 100%;
                        }
                
                        .health-card-body .health-card-inner {
                            background-color: #fff !important;
                            padding: 1em!important;
                            height: 100%!important;
                        }
                
                        .header-main {
                            position: relative;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            height: 100px;
                        }
                
                        .header-main h3 {
                            color: #5780B6;
                            text-transform: uppercase;
                            font-weight: 700;
                            margin: 0%;
                        }
                
                        .check-head .form-report {
                            text-align: center;
                        }
                
                        .header-logo {
                            position: absolute;
                            left: 15px;
                            top: 20px;
                        }
                
                        .header-logo img {
                            height: 80px;
                        }
                
                        .sub-heading-main {
                            display: block;
                            text-align: center;
                        }
                
                        .sub-heading-main h3 {
                            display: inline-block;
                            background: #5780B6;
                            border-radius: 25px;
                            font-size: 1.2rem;
                            text-transform: uppercase;
                            font-weight: 700;
                            color: #fff;
                            margin-bottom: 0.5rem;
                            padding: 5px 10px;
                        }
                
                        .sub-heading-main h4 {
                            color: #000;
                            font-size: 1rem;
                        }
                
                        .form-group .form-main-group {
                            align-items: center;
                        }
                
                        .form-group .form-main-group label {
                            font-weight: 600;
                        }
                
                        .form-group .form-main-group img {
                            height: 40px;
                        }
                
                
                        .form-report:focus {
                            border: none;
                            box-shadow: none;
                        }
                
                        .form-report {
                            color: #000!important;
                            font-weight: 500!important;
                            font-size: 1.1rem!important;
                            padding: 0!important;
                            border: none!important;
                        }
                
                        .label-report {
                            color: #000;
                            margin-bottom: 0;
                            margin-right: 10px;
                            font-weight: 500;
                        }
                
                        .primary-remark {
                            color: #5780B6;
                            font-weight: 600;
                        }
                
                        .form-main-group .label-report {
                            min-width: 130px;
                        }
                
                        .label-p {
                            color: #000;
                            margin-bottom: 0;
                            margin-right: 10px;
                            font-size: 1.1rem;
                            font-weight: 500;
                        }
                
                        .check-head {
                            display: flex;
                            align-items: center;
                        }
                
                        .form-group .copyright-text-report {
                            margin: 0;
                            text-align: center;
                            color: #5780B6;
                        }
                
                        .table-report-rc tbody tr td {
                            border: 1px solid #000;
                            padding: 6px;
                            font-weight: 500;
                        }
                
                        .table-report-checkbox tbody tr td {
                            width: 50%;
                            padding: 8px 0px;
                            border: none;
                            vertical-align: middle;
                        }
                
                        .table-responsive {
                            overflow-x: hidden;
                        }
                        .c-card-container {
                            position: relative;
                            border: 1px solid darkslateblue;
                            padding: 60px 30px;
                            font-size: 16px;
                            font-weight: bold;
                            width: 790px;
                            height: 470px;
                        }
                        .c-fs-10 {
                            font-size: 10px;
                        }
                
                        .c-fs-16 {
                            font-size: 16px;
                        }
                
                        .c-fs-18 {
                            font-size: 18px;
                        }
                
                        .c-w-200 {
                            width: 200px;
                        }
                
                        .c-mb-15 {
                            margin-bottom: 15px;
                        }
                
                        .text_left {
                            display: flex;
                            flex-direction: column;
                            align-items: flex-start;
                        }
                
                        .qrcode_right {
                            display: flex!important;
                            align-items: flex-end!important;
                            flex-direction: column!important;
                        }
                        .c-card-bg {
                            position: absolute!important;
                            z-index: 0!important;
                            top: 0px!important;
                            left: 0!important;
                        }
                        .c-p-r{
                            position: relative;
                        }
                        .c-pagination{
                            position: absolute!important;
                            bottom: 10px!important;
                            right: 50px!important;
                            font-size: 12px!important;
                        }
                        .modal-right {
                            padding-right: 0 !important;
                          }
                          .modal-right .modal-dialog {
                            margin: 0 auto;
                            margin-right: 0;
                            margin-top: 0;
                            margin-bottom: 0;
                            height: 100%;
                            max-width: 380px;
                          }
                          .modal-right .modal-content {
                            min-height: 100%;
                          }
                          .modal-right .modal-header {
                            height: 100px;
                          }
                          .modal-right .modal-footer {
                            justify-content: center;
                          }
                          .modal-right .modal.fade .modal-dialog {
                            transform: translate(25%, 0) !important;
                          }
                          .modal-right .modal.show .modal-dialog {
                            transform: translate(0, 0) !important;
                          }
                          .nav-tabs.separator-tabs {
                            border-bottom: 1px solid #424242;
                          }
                          .nav-tabs .nav-link {
                            border: initial;
                            padding-top: 1rem;
                            cursor: pointer;
                            color: lightslategrey;
                          }
                          .nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
                            background: initial;
                          }
                          .nav-tabs .nav-link.active::before, .nav-tabs .nav-item.show .nav-link::before {
                            content: ' ';
                            background: #236591;
                            border-radius: 10px;
                            position: absolute;
                            width: 5px;
                            height: calc(100% - 1rem);
                            top: 32%;
                            left: 0;
                            transform: translateX(-50%);
                          }
                          .nav-tabs.separator-tabs .nav-link.active::before, .nav-tabs.separator-tabs .nav-item.show .nav-link::before {
                            content: ' ';
                            background: #236591;
                            border-radius: 10px;
                            position: absolute;
                            width: 100%;
                            height: 2px;
                            left: 0;
                            bottom: 0;
                            top: unset;
                            transform: initial;
                          }
                          .nav-tabs.separator-tabs .nav-link {
                            border: initial;
                            padding-top: 1rem;
                            background: initial;
                            padding-left: 0;
                            padding-top: 0.5rem;
                            padding-right: 0;
                            margin-right: 1.5rem;
                            font-weight: 600;
                            letter-spacing: 0.5px;
                            color: #707070;
                          }
                          .nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
                            border: initial;
                            position: relative;
                            color: #236591;
                          }
                          .nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {
                            border: initial;
                            color: #236591;
                          }
                        .btn-primary {
                            background-color: #00365a;
                            border-color: #00365a;
                            color: #fff;
                        }
                        .btn-primary:hover {
                            color: #fff;
                            background-color: #001e31;
                            border-color: #001e31;
                        }
                        .btn {
                            border-radius: 50px;
                            outline: initial !important;
                            box-shadow: none !important;
                            box-shadow: initial !important;
                            font-size: 0.8rem;
                            padding: 0.5rem 1.25rem 0.5rem 1.25rem;
                            transition: background-color box-shadow 0.1s linear;
                        }
                        .btn-secondary {
                            color: #184f90;
                            border-color: #184f90;
                            background-color: #ffffff;
                        }
                        .btn-secondary:hover {
                            background-color: #184f90;
                            border-color: #184f90;
                            color: white;
                        }     
                        
                                             
                    </style>
                
                </head>
                
                <body>
                    <div class="canvas_div_pdf">
                        <!--Page 1-->
                        <page size="A4">
                            <section class="health-card-body">
                                <div class="container-fluid">
                                    <div class="health-card-inner">
                                    <div class="row print-btn d-flex flex-nowrap" style="padding-left: 690px;">
                                    ${userRole === 'Super Admin'
                        ? `
                                    <button class="btn btn-info mr-2" onclick="handleEdit('${id}')">Edit</button>
                                  `
                        : ''
                    }
                                            <button class="btn btn-primary" onclick="window.print()">Print</button>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <div class="header-main">
                
                                                    <div class="header-logo">
                                                        <img src=${schoolLogo || lucknowSmartCity}
                                                            class="img-fluid" style="width: 200px;position: relative;right: 30px;object-fit:contain;">
                                                    </div>
                                                    <h3>Health Report Card</h3>
                                                    <div class="header-logo" style="top: 27px;left: 80%;width: 120px;">
                                                        <img src="${stufitNew}"
                                                            class="img-fluid"">
                                                    </div>
                                                </div>
                
                                                <div class="sub-heading-main">
                                                    <h3 class="rounded-corner">Student Record</h3>
                                                </div>
                                            </div>
                                        </div>
                
                                        <div class="form-group row">
                                            <div class="col-sm-12">
                                                <div class="form-main-group d-flex">
                                                    <label class="label-report ">Stufit ID: </label>
                                                    <span class="form-report">${items.student_id
                    }</span>
                                                </div>
                                            </div>
                                        </div>
                
                                        <div class="form-group row">
                                            <div class="col-sm-12">
                                                <div class="form-main-group d-flex">
                                                    <label class="label-report ">Name:</label>
                                                    <span class="form-report">${items.std_name
                    }</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-6">
                                                <div class="form-main-group d-flex">
                                                    <label class="label-report ">Class/Sec:</label>
                                                    <span class="form-report">${items.class_id
                    }/${items.section_id}</span>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-main-group d-flex">
                                                    <label class="label-report ">Gender:</label>
                                                    <span class="form-report">${items.std_gender
                    }</span>
                                                </div>
                                            </div>
                                        </div>
                
                                        <div class="form-group row">
                                            <div class="col-sm-12">
                                                <div class="form-main-group d-flex">
                                                    <label class="label-report ">Mother's Name:</label>
                                                    <span class="form-report">${items.std_mother_name
                    }</span>
                                                </div>
                                            </div>
                                        </div>
                
                                        <div class="form-group row">
                                            <div class="col-sm-12">
                                                <div class="form-main-group d-flex">
                                                    <label class="label-report">Father's Name:</label>
                                                    <span class="form-report">${items.std_father_name
                    }</span>
                                                </div>
                                            </div>
                                        </div>
                
                                        <div class="form-group row">
                                            <div class="col-sm-6">
                                                <div class="form-main-group d-flex">
                                                    <label class="label-report ">Date of Birth:</label>
                                                    <span class="form-report">${formatDate(
                        items.std_dob
                    )}</span>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-main-group d-flex">
                                                    <label class="label-report ">Blood Group:</label>
                                                    <span class="form-report">${items.pa_blood_group
                    }</span>
                                                </div>
                                            </div>
                                        </div>
                
                                        <div class="form-group row">
                                            <div class="col-sm-12">
                                                <div class="form-main-group d-flex">
                                                    <label class="label-report ">Address:</label>
                                                    <p class="label-p">${items.std_address.replace(
                        /,/g,
                        ''
                    )}</p>
                                                </div>
                                            </div>
                                        </div>
                
                                        <div class="form-group row">
                                            <div class="col-sm-12">
                                                <div class="form-main-group d-flex">
                                                    <label class="label-report ">Email:</label>
                                                    <span class="form-report">${items.std_email
                    }</span>
                                                </div>
                                            </div>
                                        </div>
                
                                        <div class="form-group row">
                                            <div class="col-sm-6">
                                                <div class="form-main-group d-flex">
                                                    <label class="label-report ">Phone No: </label>
                                                    <span class="form-report">${![
                        '',
                        'na',
                        'no',
                    ].includes(
                        items.std_contact.toLowerCase()
                    )
                        ? `+91-${items.std_contact}`
                        : items.std_contact
                    }</span>
                                                </div>
                                            </div>
                
                                        </div>
                
                                        <div class="form-group row">
                                            <div class="col-sm-6">
                                                <div class="form-main-group d-flex">
                                                    <label class="label-report ">Siblings in the school:</label>
                
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-main-group d-flex">
                                                    <label class="label-report ">${items.std_siblings
                    }</label>
                
                                                </div>
                                            </div>
                                        </div>
                
                                        <div class="footer-main">
                                            <div class="form-group row">
                                                <div class="col-sm-6">
                                                    <div class="form-main-group d-flex">
                                                        <label class="label-report ">Doctor’s Name: </label>
                                                        <span class="form-report">Dr. Manju Tripathi</span>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="form-main-group d-flex">
                                                        <label class="label-report" style="width: 150px;">Doctor’s Signature: </label>
                                                        <img class="img-fluid" style="width: 80px;"
                                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Jon_Kirsch%27s_Signature.png/1280px-Jon_Kirsch%27s_Signature.png">
                                                    </div>
                                                </div>
                                            </div>
                
                                            <div class="form-group row">
                                                <div class="col-sm-6">
                                                    <div class="form-main-group d-flex">
                                                        <label class="label-report ">Place:</label>
                                                        <span class="form-report">${items.std_city
                    }</span>
                                                    </div>
                                                </div>
                
                                            </div>
                
                                            <div class="form-group row" style="margin-top: 90px">
                                                <div class="col-sm-12">
                                                    <p class="copyright-text-report">© Copyright STUFIT Approach Pvt. Ltd.</p>
                                                </div>
                                            </div>
                                            <div class="c-pagination">
                                                <p>Page No. 1</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </page>
                
                        <!--Page 2-->
                        <page size="A4">
                            <section class="health-card-body">
                                <div class="container-fluid">
                                    <div class="health-card-inner">
                                        <div class="row mb-4">
                                            <div class="col-sm-12">
                                                <div class="header-main">
                                                   <div class="header-logo">
                                                        <img src=${schoolLogo || lucknowSmartCity}
                                                            class="img-fluid" style="width: 200px;position: relative;right: 30px;object-fit:contain;">
                                                    </div>
                                                    <h3>Health Report Card</h3>
                                                    <div class="header-logo" style="top: 27px;left: 80%;width: 120px;">
                                                        <img src="${stufitNew}"
                                                            class="img-fluid"">
                                                    </div>
                                                </div>
                
                                                <div class="sub-heading-main">
                                                    <h3>PHYSICAL ASSESSMENT</h3>
                                                    <h4>(16 PARAMETERS)</h4>
                                                </div>
                                            </div>
                                        </div>
                
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <div class="table-responsive">
                                                    <table class="table table-report-checkbox">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">1. Height : </label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.pa_height
                    } cm</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">2. Weight :</label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report"> ${items.pa_weight
                        ? `${items.pa_weight} kg`
                        : ''
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">3. BMI : </label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report"> ${items.pa_bmi
                        ? `${items.pa_bmi} kg/m2`
                        : items.pa_bmi
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">4. Pulse Rate :
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.pa_pulse_rate
                        ? `${items.pa_pulse_rate} bpm`
                        : ''
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">5. Body Temperature :
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${celsiusToFarhenheit(
                        items.pa_body_temp
                    )} </label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">6. Posture : </label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.pa_posture
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">7. Upper Limb Rom :
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.pa_upper_limb_range_of_motion
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">8. Neck Rom :
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.pa_neck_form
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">9. Lower Limb Rom :
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.pa_lower_limb_range_of_motion
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">10. Dystrophy :
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.pa_dystrophy
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">11. Atrophy :
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.pa_atrophy
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">12. Stamina :
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.pa_stamina
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">13. Endurance :
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.pa_endurance
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">14. Pain : </label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.pa_pain
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">15. Spasm : </label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.pa_spasm
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">16. Oxygen Saturation
                                                                            : </label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.pa_oxygen
                        ? items.pa_oxygen
                        : 'Normal'
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                
                                                        </tbody>
                                                    </table>
                                                    <div class="form-group row">
                                                        <div class="col-sm-12">
                                                            <div class="form-main-group d-flex">
                                                                <label class="label-report primary-remark align-self-baseline">Advice:
                                                                </label>
                                                                <p class="label-p">
                                                                ${items.pa_advice
                    }
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group row">
                                                        <div class="col-sm-12">
                                                            <div class="form-main-group d-flex">
                                                                <label class="label-report primary-remark align-self-baseline">Remarks:
                                                                </label>
                                                                <p class="label-p">
                                                                ${items.pa_remark
                    }
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group row" style="margin-top: 40px">
                                                        <div class="col-sm-12">
                                                            <p class="copyright-text-report">© Copyright STUFIT Approach Pvt.
                                                                Ltd.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="c-pagination">
                                            <p>Page No. 2</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </page>
                
                        <!--Page 3-->
                        <page size="A4">
                            <section class="health-card-body">
                                <div class="container-fluid">
                                    <div class="health-card-inner">
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <div class="header-main">
                                                   <div class="header-logo">
                                                        <img src=${schoolLogo || lucknowSmartCity}
                                                            class="img-fluid" style="width: 200px;position: relative;right: 30px;object-fit:contain;">
                                                    </div>
                                                    <h3>Health Report Card</h3>
                                                    <div class="header-logo" style="top: 27px;left: 80%;width: 120px;">
                                                        <img src="${stufitNew}"
                                                            class="img-fluid"">
                                                    </div>
                                                </div>
                
                                                <div class="sub-heading-main">
                                                    <h3>EYE & VISION ASSESSMENT</h3>
                                                    <h4>(14 PARAMETERS)</h4>
                                                </div>
                                            </div>
                                        </div>
                
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <div class="table-responsive">
                                                    <table class="table table-report-rc">
                                                        <tbody>
                                                            <tr>
                                                                <td colspan="2" class="text-center"></td>
                                                                <!-- <td colspan="1" class="text-center" >Right/</td> -->
                                                                <td colspan="1" class="text-center">Right | Left</td>
                
                                                            </tr>
                
                
                                                            <tr>
                
                                                                <td colspan="2"><span class="primary-remark">Vision</span></td>
                                                                <td>${items.va_right_eye_vision
                        ? `${items.va_right_eye_vision}&nbsp;&nbsp;&nbsp|&nbsp;&nbsp;&nbsp`
                        : ''
                    }${items.va_left_eye_vision
                    }</td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2"><span class="primary-remark">Refraction </span></td>
                                                                <td>${items.va_refraction
                    }</td>
                                                            </tr>
                
                                                            <tr>
                                                                <td colspan="2"><span class="primary-remark">Colour Vision </span></td>
                                                                <td>${items.va_colour_vision
                    }</td>
                                                            </tr>
                
                
                                                            <tr>
                                                                <td colspan="2"><span class="primary-remark">Disease </span></td>
                                                                <td>${items.va_eye_disease
                    }</td>
                                                            </tr>
                
                                                            <tr>
                                                                <td colspan="2"><span class="primary-remark">Squint </span></td>
                                                                <td>${items.va_squint
                    }</td>
                                                            </tr>
                
                                                            <tr>
                                                                <td colspan="2"><span class="primary-remark">Micro Eye Ball </span></td>
                                                                <td>${items.va_micro_eye_ball
                    }</td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2"><span class="primary-remark">Ptosis </span></td>
                                                                <td>${items.va_ptosis
                    }</td>
                                                            </tr>
                
                
                                                            <tr>
                                                                <td colspan="2"><span class="primary-remark">Nystagmus </span></td>
                                                                <td>${items.va_nystagmus
                    }</td>
                                                            </tr>
                
                                                            <tr>
                                                                <td colspan="2"><span class="primary-remark">Cataract </span></td>
                                                                <td>${items.va_cataract
                    }</td>
                                                            </tr>
                
                                                            <tr>
                                                                <td colspan="2"><span class="primary-remark">Itching </span></td>
                                                                <td>${items.va_itching
                    }</td>
                                                            </tr>
                
                                                            <tr>
                                                                <td colspan="2"><span class="primary-remark">Dryness </span></td>
                                                                <td>${items.va_dryness
                    }</td>            
                                                            </tr>
                
                                                            <tr>
                                                                <td colspan="2"><span class="primary-remark">Frequent Tears </span></td>
                                                                <td>${items.va_frequent_tear
                    }</td> 
                                                            </tr>
                
                                                            <tr>
                                                                <td colspan="2"><span class="primary-remark">Red Eyes</span></td>
                                                                <td>${items.va_red_eyes
                    }</td>            
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2"><span class="primary-remark">Yellowish Eyes</span></td>
                                                                <td>${items.va_yellowish_eyes
                    }</td>            
                                                            </tr>
                
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-12">
                                                <div class="form-main-group d-flex">
                                                    <label class="label-report primary-remark align-self-baseline">Advice: </label>
                                                    <p class="label-p">${items.va_advise
                    }</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-12">
                                                <div class="form-main-group d-flex">
                                                    <label class="label-report primary-remark align-self-baseline">Remarks: </label>
                                                    <p class="label-p">${items.va_remark
                    }</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row" style="margin-top: 50px">
                                            <div class="col-sm-12">
                                                <p class="copyright-text-report">© Copyright STUFIT Approach Pvt. Ltd.</p>
                                            </div>
                                        </div>
                                        <div class="c-pagination">
                                            <p>Page No. 3</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </page>
                
                
                        <!--Page 4-->
                        <page size="A4">
                            <section class="health-card-body">
                                <div class="container-fluid">
                                    <div class="health-card-inner">
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <div class="header-main">
                                                   <div class="header-logo">
                                                        <img src=${schoolLogo || lucknowSmartCity}
                                                            class="img-fluid" style="width: 200px;position: relative;right: 30px;object-fit:contain;">
                                                    </div>
                                                    <h3>Health Report Card</h3>
                                                    <div class="header-logo" style="top: 27px;left: 80%;width: 120px;">
                                                        <img src="${stufitNew}"
                                                            class="img-fluid"">
                                                    </div>
                                                </div>
                
                                                <div class="sub-heading-main">
                                                    <h3>DENTAL & ORAL
                                                        ASSESSMENT </h3>
                                                    <h4>(8 PARAMETERS)</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <div class="table-responsive">
                                                    <table class="table table-report-checkbox">
                                                        <tbody>
                
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">1. Dental
                                                                            Caries:</label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.da_caries
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">2. Orthodontic
                                                                            Correction:</label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.da_orthodontic_correction
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">3.
                                                                            Extraction:</label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.da_extraction
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">4. Space
                                                                            Maintainer:</label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.da_space_maintainer
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">5. Oral Hygienic
                                                                            Status:</label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.da_oral_hygiene_status
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">6. Sugar
                                                                            Intake:</label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.da_sugar_intake
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">7. No. of time
                                                                            Brushed:</label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.da_brushing
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                
                
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">8. Malpositioned
                                                                            Teeth:</label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.da_malpositioned_teeth
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-12">
                                                <div class="form-main-group d-flex">
                                                    <label class="label-report primary-remark align-self-baseline">Advice:
                                                    </label>
                                                    <p class="label-p">${items.da_advise
                    }</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-12">
                                                <div class="form-main-group d-flex">
                                                    <label class="label-report primary-remark align-self-baseline">Remarks:
                                                    </label>
                                                    <p class="label-p">${items.da_remark
                    }</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row" style="margin-top: 150px">
                                            <div class="col-sm-12">
                                                <p class="copyright-text-report">© Copyright STUFIT Approach Pvt. Ltd.</p>
                                            </div>
                                        </div>
                                        <div class="c-pagination">
                                            <p>Page No. 4</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </page>
                
                
                        <!--Page 5-->
                        <page size="A4">
                            <section class="health-card-body">
                                <div class="container-fluid">
                                    <div class="health-card-inner">
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <div class="header-main">
                                                   <div class="header-logo">
                                                        <img src=${schoolLogo || lucknowSmartCity}
                                                            class="img-fluid" style="width: 200px;position: relative;right: 30px;object-fit:contain;">
                                                    </div>
                                                    <h3>Health Report Card</h3>
                                                    <div class="header-logo" style="top: 27px;left: 80%;width: 120px;">
                                                        <img src="${stufitNew}"
                                                            class="img-fluid"">
                                                    </div>
                                                </div>
                
                                                <div class="sub-heading-main">
                                                    <h3>AUDIO & SPEECH
                                                        ASSESSMENT </h3>
                                                    <h4>(12 PARAMETERS)</h4>
                                                </div>
                                            </div>
                                        </div>
                
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <div class="table-responsive">
                                                    <table class="table table-report-checkbox">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">1. Speech Milestones
                                                                            :</label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.sa_speech_milestone
                    }</label>
                                                                    </div>
                                                                </td>
                
                                                            </tr>
                
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">2.
                                                                            Comprehension:</label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.sa_comprehesion
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">3.
                                                                            Expression:</label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.sa_expression
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">4. Mode of
                                                                            Communication:</label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.sa_mode_of_communication
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">5. Auditory
                                                                            Skills:</label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.sa_audiotory_skills
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">6. Hearing Loss:
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.sa_hearing_loss
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">7. Tinnitus: </label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.sa_tinnitus
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">8. Ear Perforation :
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.sa_ear_performation
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">9. Respond on Name
                                                                            Call:</label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.sa_respond_on_named_calls
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">10. Hearing
                                                                            Assessment Result: </label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.sa_hearing_assesment_result.toUpperCase()}</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">11. Wax:</label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.sa_ear_wax
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">12. Medical History
                                                                            (If any):</label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.sa_medical_history
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-12">
                                                <div class="form-main-group d-flex">
                                                    <label class="label-report primary-remark align-self-baseline">Advice: </label>
                                                    <p class="label-p">${items.sa_advice
                    }</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-12">
                                                <div class="form-main-group d-flex">
                                                    <label class="label-report primary-remark align-self-baseline">Remarks: </label>
                                                    <p class="label-p">${items.sa_remark
                    }</p>
                                                </div>
                                            </div>
                                        </div>
                
                                        <div class="form-group row" style="margin-top: 40px">
                                            <div class="col-sm-12">
                                                <p class="copyright-text-report">© Copyright STUFIT Approach Pvt. Ltd.</p>
                                            </div>
                                        </div>
                                        <div class="c-pagination">
                                            <p>Page No. 5</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </page>
                
                
                        <!--Page 6-->
                        <page size="A4">
                            <section class="health-card-body">
                                <div class="container-fluid">
                                    <div class="health-card-inner">
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <div class="header-main">
                                                   <div class="header-logo">
                                                        <img src=${schoolLogo || lucknowSmartCity}
                                                            class="img-fluid" style="width: 200px;position: relative;right: 30px;object-fit:contain;">
                                                    </div>
                                                    <h3>Health Report Card</h3>
                                                    <div class="header-logo" style="top: 27px;left: 80%;width: 120px;">
                                                        <img src="${stufitNew}"
                                                            class="img-fluid"">
                                                    </div>
                                                </div>
                
                                                <div class="sub-heading-main">
                                                    <h3>NUTRITIONAL ASSESSMENT </h3>
                                                    <h4>(12 PARAMETERS)</h4>
                                                </div>
                                            </div>
                                        </div>
                
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <div class="table-responsive">
                                                    <table class="table table-report-checkbox">
                                                        <tbody>
                                                            <!--checkbox-->
                                                            <tr>
                                                                <td colspan="2">
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">1. Pale Or Yellowish
                                                                            Skin: </label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.na_pale_yellowish_skin
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                
                                                            <tr>
                                                                <td colspan="2">
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">2. Vitamin D
                                                                            deficiency Symptoms: </label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.na_vitamin_d_deficiency
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                
                                                            <tr>
                                                                <td colspan="2">
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">3. Obesity: </label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.na_obesity
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2">
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">4. Irregular
                                                                            Heartbeats: </label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.na_irregular_heartbeats
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2">
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">5. Shortness Of
                                                                            Breath : </label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.na_shortness_of_breath
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2">
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">7. Dizziness/ Light
                                                                            Headedness : </label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.na_dizziness
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2">
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">7. Cold Hands / Feet
                                                                            : </label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.na_cold_hands_feet
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2">
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">8. Symptoms Of Anemia : </label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.na_anemia
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2">
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">9. Fatigue : </label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.na_fatigue
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2">
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">10. Ideal Body
                                                                            Weight: </label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${idealMetrics.idealBodyWeight
                        ? `${idealMetrics.idealBodyWeight} KG`
                        : ''
                    } </label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                
                                                            <tr>
                                                                <td colspan="2">
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">12. Ideal Calories
                                                                            Estimation: </label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${idealMetrics.estimatedCaloricIntake
                        ? `${idealMetrics.estimatedCaloricIntake} Cal/Day`
                        : ''
                    } </label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                
                
                                        <div class="form-group row">
                                            <div class="col-sm-12">
                                                <div class="form-main-group d-flex">
                                                    <label class="label-report primary-remark align-self-baseline">Advice: </label>
                                                    <p class="label-p">${items.na_advice
                    }</p>
                                                </div>
                                            </div>
                                        </div>
                
                                        <div class="form-group row">
                                            <div class="col-sm-12">
                                                <div class="form-main-group d-flex">
                                                    <label class="label-report primary-remark align-self-baseline">Remark: </label>
                                                    <p class="label-p">${items.na_remark
                    }</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row" style="margin-top: 120px">
                                            <div class="col-sm-12">
                                                <p class="copyright-text-report">© Copyright STUFIT Approach Pvt. Ltd.</p>
                                            </div>
                                        </div>
                                        <div class="c-pagination">
                                            <p>Page No. 6</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </page>
                
                        <!--Page 8-->
                        <page size="A4">
                            <section class="health-card-body">
                                <div class="container-fluid">
                                    <div class="health-card-inner">
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <div class="header-main">
                                                   <div class="header-logo">
                                                        <img src=${schoolLogo || lucknowSmartCity}
                                                            class="img-fluid" style="width: 200px;position: relative;right: 30px;object-fit:contain;">
                                                    </div>
                                                    <h3>Health Report Card</h3>
                                                    <div class="header-logo" style="top: 27px;left: 80%;width: 120px;">
                                                        <img src="${stufitNew}"
                                                            class="img-fluid"">
                                                    </div>
                                                </div>
                
                                                <div class="sub-heading-main">
                                                    <h3>GENERAL ASSESSMENT
                                                    </h3>
                                                    <h4>(11 PARAMETERS)</h4>
                                                </div>
                                            </div>
                                        </div>
                
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <div class="table-responsive">
                                                    <table class="table table-report-checkbox">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">1. Chest
                                                                            Auscultation:</label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.ga_chest_ausculation
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">2. Abdominal
                                                                            Palpitation:</label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.ga_abdominal_pulpitation
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">3. Active Infectious
                                                                            Disease:</label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.ga_active_infectius_disease
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                
                
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">4. Cleft Lip/Palate:
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.ga_cleft_up
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">5. Club Foot:
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.ga_club_foot
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">6. Congenital
                                                                            Cataract: </label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.ga_conginital_cataract
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">7. Congenital
                                                                            Deafness: </label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.ga_conginital_deafness
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">8. Skin Condition:
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.ga_skin_infection
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">9. Otitis Media:
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.ga_otitis_media
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">10. Neuromotor
                                                                            Impairment: </label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.ga_neuromotor_impairment
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                
                                                            <tr>
                                                                <td>
                                                                    <div class="label-head">
                                                                        <label class="label-report primary-remark">11. Body
                                                                            Type:</label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="check-head">
                                                                        <label class="label-report">${items.ga_body_type
                    }</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                
                                        <div class="form-group row">
                                            <div class="col-sm-12">
                                                <div class="form-main-group d-flex">
                                                    <label class="label-report primary-remark align-self-baseline">Advice: </label>
                                                    <p class="label-p">${items.ga_advice
                    }</p>
                                                </div>
                                            </div>
                                        </div>
                
                                        <div class="form-group row mb-5">
                                            <div class="col-sm-12">
                                                <div class="form-main-group d-flex">
                                                    <label class="label-report primary-remark align-self-baseline">Remark: </label>
                                                    <p class="label-p">${items.ga_remark
                    }</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row pt-5 printClass">
                                            <div class="col-sm-12">
                                                <div class="c-card-container">
                                                    <div class="card-div">
                                                        <div class="c-card-bg">
                                                            <img src="${stufitCardBg}" style="height: 470px;width: 100%;">
                                                        </div>
                                                        <div class="text-center c-p-r" style="margin-bottom: 25px;">
                                                            <h3 style="font-weight: bold;"> DIGITAL HEALTH REPORT CARD </h3>
                                                        </div>
                                                        <div class="d-flex justify-content-between">
                                                            <div class="text_left col-6">
                                                                <div class="c-mb-15" style="height: 150px;">
                                                                    <p>STUDENT ID: ${items.student_id
                    }</p>
                                                                    <p>NAME: ${items.std_name.toUpperCase()}</p>
                                                                    <p>CLASS: ${items.class_id
                    }-${items.section_id
                    }</p>
                                                                    <p>SCHOOL: ${items.school_name.toUpperCase()}</p>
                                                                </div>
                                                                <div class="img_left text-center">
                                                                    <p class="c-fs-10 mb-0">INITIATED BY</p>
                                                                    <p class="c-fs-16">LUCKNOW SMART CITY LIMITED</p>
                                                                </div>
                                                                <div class="img_left">
                                                                    <img style="width: 180px;margin-left:35px" src=${schoolLogo || lucknowSmartCity}>
                                                                </div>
                    
                                                            </div>
                                                            <div class="qrcode_right col-6">
                                                                <div class="c-mb-15" style="margin-right: 70px;" id="qrcode">
                                                                ${renderQRCode(
                        window
                            .location
                            .href
                    )}
                                                                </div>
                                                                <div class="img_right text-center">
                                                                    <p class="c-fs-10 mb-0">CONDUCTED BY</p>
                                                                    <p class="c-fs-16">STUFIT APPROACH PRIVATE LIMITED</p>
                                                                </div>
                                                                <div class="img_right">
                                                                    <img style="width: 105px;margin-right: 90px;" src="${stufitNew}">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row" style="margin-top: 80px">
                                            <div class="col-sm-12">
                                                <p class="copyright-text-report">© Copyright STUFIT Approach Pvt. Ltd.</p>
                                            </div>
                                        </div>AddUpdateReportModal
                                        AddUpdateReportModal
                                        <div class="c-pagination">
                                            <p>Page No. 7</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </page>
                
                    </div>
                
                    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.slim.min.js"> </script>
                    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"> </script>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"> </script>                   

                    </body>
                
                </html>`;
            }
        }

        const fetchData = async () => {
            apiRequestAsync('get', apiUrl, null, {}, true)
                .then((reportData) => {
                    if (reportData.response.code === 200) {
                        setformData(reportData.data[0]);
                        printReport(reportData.data[0]);
                    }
                    return null;
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
        };

        fetchData();
    }, []);

    return (
        <>
            <FormDataProviderReport>
                <AddReportModal
                    modalOpen={modalOpen}
                    toggleModal={() => setModalOpen(!modalOpen)}
                    listData={formData}
                    roleupdate={reportObject}
                    listReport={fetchDataReports}
                />
            </FormDataProviderReport>
        </>
    );
};

export default HealthReportCard;
