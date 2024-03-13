import React, { useState, useEffect, useCallback } from 'react';
import { injectIntl } from 'react-intl';
import { Row, Card, CardBody, FormGroup, Label } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Select from 'react-select';
import Breadcrumb from 'containers/navs/Breadcrumb';
import { BarChart } from 'components/charts';
import { ThemeColors } from 'helpers/ThemeColors';
import { chartTooltip } from 'components/charts/util';
import { apiBaseUrl, apiRequestAsync } from 'constants/defaultValues';
import lucknowSmartCity from 'assets/logos/lucknowSmartCity.png';

const DashboardMain = ({ match }) => {
  const [items, setItems] = useState([]);
  const [schoolName, setSchoolName] = useState('');
  const [schoolOptions, setschoolOptions] = useState();
  const [schoolLogo, setSchoolLogo] = useState('');
  const [showChart, setShowChart] = useState(false);
  const fetchData = async (option) => {
    let apiUrl;
    try {
      if (option) {
        apiUrl = `${apiBaseUrl}/dashboard/count/school/${option.value}`;
      } else {
        apiUrl = `${apiBaseUrl}/dashboard/count/school`;
      }
      const data = await apiRequestAsync('get', apiUrl, null);
      setItems(data.result);
      setShowChart(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = useCallback((option) => {
    setSchoolName(option);
    fetchData(option);
    console.log(option);
  }, [setSchoolName, fetchData]);
  

  useEffect(() => {
    fetchData();
    const schoolListUrl = `${apiBaseUrl}/schools`;
    const fetchSchoolIdData = async () => {
      try {
        const data = await apiRequestAsync('get', schoolListUrl, null);
        const schoolidoptions = data.data.map((school) => ({
          value: school.id,
          label: school.name,
        }));
        setschoolOptions(schoolidoptions);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchSchoolIdData();

    const cUserData = JSON.parse(localStorage.getItem('stufit_current_user'))
    setSchoolLogo(cUserData.uid.image);
  }, []);

  const range1 = Math.max(items.male_students, items.female_students);
  const range3 = Math.max(items.severe_male_students, items.severe_female_students);

  // const maxTicks = Math.ceil(range / stepSize) * stepSize;
  const maxTicks1 = Math.ceil(range1 / 100) * 100;
  const maxTicks3 = Math.ceil(range3 / 20) * 20;


  const barChartOptions = {
    legend: {
      position: 'bottom',
      labels: {
        padding: 30,
        usePointStyle: true,
        fontSize: 12,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          gridLines: {
            display: true,
            lineWidth: 1,
            color: 'rgba(0,0,0,0.1)',
            drawBorder: false,
          },
          ticks: {
            beginAtZero: true,
            stepSize: 100,
            min: 100,
            max: maxTicks1,
            padding: 10,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
    tooltips: chartTooltip,
  };

  const barChartOptions2 = {
    legend: {
      position: 'bottom',
      labels: {
        padding: 30,
        usePointStyle: true,
        fontSize: 12,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          gridLines: {
            display: true,
            lineWidth: 1,
            color: 'rgba(0,0,0,0.1)',
            drawBorder: false,
          },
          ticks: {
            beginAtZero: true,
            stepSize: 100,
            min: 100,
            max: 1200,
            padding: 10,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
    tooltips: chartTooltip,
  };

  const barChartOptions3 = {
    legend: {
      position: 'bottom',
      labels: {
        padding: 30,
        usePointStyle: true,
        fontSize: 12,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          gridLines: {
            display: true,
            lineWidth: 1,
            color: 'rgba(0,0,0,0.1)',
            drawBorder: false,
          },
          ticks: {
            beginAtZero: true,
            stepSize: 20,
            min: 0,
            max: maxTicks3,
            padding: 10,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
    tooltips: chartTooltip,
  };

  const colors = ThemeColors();
  const barChartData1 = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        label: `Total Students Examined : ${items.total_students}`,
        backgroundColor: [colors.themeColor8_10, colors.themeColor9_10],
        data: [items.male_students, items.female_students], // Combine the data for Male and Female
        borderWidth: 2,
      },
    ],
  };

  const barChartData2 = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        label: 'Total Target Audience : 1765',
        backgroundColor: [colors.themeColor8_10, colors.themeColor9_10],
        data: [900, 865], // Combine the data for Male and Female
        borderWidth: 2,
      },
    ],
  };

  const barChartData3 = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        label: `Total Severe Examined : ${items.total_severe_students}`,
        backgroundColor: [colors.themeColor8_10, colors.themeColor9_10],
        data: [items.severe_male_students, items.severe_female_students], // Combine the data for Male and Female
        borderWidth: 2,
      },
    ],
  };

  return (
    <>
      <Row style={{ position: 'relative' }}>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.dashboard" match={match} />
          <div
            className="header-logo"
            style={{ position: 'absolute', bottom: '45px', left: '86%' }}
          >
            <img
              src={schoolLogo || lucknowSmartCity}
              alt="admin logo"
              className="img-fluid"
              style={{ height: '70px', width: '150px', objectFit: 'contain' }}
            />
          </div>
          <Separator className="mb-5" />
        </Colxx>
      </Row>
    
      <div className="d-flex col-12">
        <Row className="mb-4 mr-3" style={{ width: '300px' }}>
          <Colxx xxs="12" lg="12">
            <FormGroup className="form-group tooltip-right-bottom">
              <Label style={{ fontSize: '1rem' }}> School Name </Label>
              <Select
                className="react-select"
                classNamePrefix="react-select"
                name="filterList"
                options={schoolOptions}
                value={schoolName}
                onChange={(selectedOption) => handleChange(selectedOption)}
              />
            </FormGroup>
          </Colxx>
        </Row>
      </div>
      <div className="d-flex col-12">
        {items && showChart && (
          <>
            <Row className="mb-4 mr-3">
              <Colxx xxs="12" lg="12">
                <Card className="c-br-25">
                  <CardBody>
                    <Row>
                      <Colxx xxs="12" lg="12">
                        <div className="chart-container">
                          <BarChart
                            key={JSON.stringify(items)}
                            data={barChartData1}
                            barChartOptions={barChartOptions}
                          />
                        </div>
                      </Colxx>
                    </Row>
                  </CardBody>
                </Card>
              </Colxx>
            </Row>

            <Row className="mb-4 mr-3">
              <Colxx xxs="12" lg="12">
                <Card className="c-br-25">
                  <CardBody>
                    <Row>
                      <Colxx xxs="12" lg="12">
                        <div className="chart-container">
                          <BarChart
                            key={JSON.stringify(items)}
                            data={barChartData2}
                            barChartOptions={barChartOptions2}
                          />
                        </div>
                      </Colxx>
                    </Row>
                  </CardBody>
                </Card>
              </Colxx>
            </Row>

            <Row className="mb-4 mr-3">
              <Colxx xxs="12" lg="12">
                <Card className="c-br-25">
                  <CardBody>
                    <Row>
                      <Colxx xxs="12" lg="12">
                        <div className="chart-container">
                          <BarChart
                            shadow
                            key={JSON.stringify(items)}
                            data={barChartData3}
                            barChartOptions={barChartOptions3}
                          />
                        </div>
                      </Colxx>
                    </Row>
                  </CardBody>
                </Card>
              </Colxx>
            </Row>
          </>
        )}
      </div>
    </>
  );
};
export default injectIntl(DashboardMain);
