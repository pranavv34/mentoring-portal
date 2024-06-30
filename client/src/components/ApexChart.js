import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class ApexChart extends Component {
  // ... (unchanged code)
  constructor(props) {
    super(props);

    const initialSeries = Array(14).fill(40);

    this.state = {
      series: initialSeries.slice(), // Initialize with 40 for each series (14 divisions)
      options: {
        chart: {
          type: 'polarArea',
          width: '100%', // Set chart width to 100% to fill the available space
        },
        stroke: {
          colors: ['#fff'],
        },
        fill: {
          opacity: 0.8,
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200, // Decrease the chart width for small screens
                height: 200, // Decrease the chart height for small screens
              },
              legend: {
                position: 'bottom',
              },
            },
          },
        ],
        labels: [
          'MOTIVATION',
          'DIVERSITY',
          'PLANNING',
          'MEMORY',
          'READING',
          'NOTE TAKING',
          'TEST TAKING',
          'THINKING',
          'WRITING',
          'RELATIONSHIPS',
          'HEALTH',
          'MONEY',
          'RESOURCES',
          'PURPOSES',
        ],
      },
      formData: {
        seriesInput: initialSeries.slice(), // Initialize with 40 for each series
      },
      scores: Array(14).fill(0), // Initialize scores array
    };
  }

  handleInputChange = (event, index, questionIndex) => {
    const { value } = event.target;
    const scores = [...this.state.scores];
    scores[index] = scores[index] || 0; // Initialize the score if not present
    scores[index] += parseInt(value, 10);
    this.setState({ scores });
  };

  handleRefresh = () => {
    const { scores } = this.state;
    this.setState({ series: scores });
  };
  render() {
    const { options, scores } = this.state;
    if (!options) {
      return <div>Loading...</div>; // You can customize this loading state
    }

    return (
      <>
        <div className="container mt-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-1">
              <h2 className="mb-3 mt-3 text-4xl font-bold text-red-600" style={{marginLeft:'200px' ,color:'#475239',fontSize:'35px'}}>
                Discovery Wheel
                <br />
              </h2>
              <div
                className="chart-container"
                style={{
                  position: 'relative',
                  width: '70%',
                  height: '500px', // Adjust the height here
                  backgroundColor: '#ddd',
                  borderRadius: '30px',
                  marginLeft:'200px',
                  padding: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center', // Center the chart horizontally
                }}
              >
                <div
                  className="chart-background"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '970px',
                    height: '800px',
                    backgroundColor: '#e4e5e3',
                    borderRadius: '30px',
                    padding: '10px',
                  }}
                >
                  <ReactApexChart options={options} series={scores} type="polarArea" />
                </div>
              </div>
            </div>
            {/* ... (unchanged code) */}
          </div>
        </div>
        <div style={{ marginTop: '450px', marginLeft: '200px' }}>
        <form>

        <div style={{ marginTop: '10px', backgroundColor: '#e4e5e3', width: '65%', borderRadius: '30px', paddingLeft: '50px', paddingTop: '30px', color: '#A50014' }}>
  <h4 className="mb-3" style={{ color: '#475239', fontWeight: 'bold', fontSize: '20px' }}>{options.labels[0]}</h4>
  {[1, 2, 3, 4, 5, 6, 7, 8].map((questionIndex) => (
    <div key={questionIndex} className="mb-2" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '4px' }}>
      <label htmlFor={`category0_question${questionIndex}`} style={{ flex: 1, fontSize: '16px' }}>
        {questionIndex}. {[
          'I start each semester highly motivated, and I stay that way.',
          'I know what I want to get from my education.',
          'I enjoy learning.',
          'I study even when distracted by activities of lower priority.',
          'I am satisfied with how I progress toward achieving goals.',
          'Studying is important, and I allow adequate time for it.',
          'I am excited about the courses I take.',
          'I have a clear idea of the benefits I expect to get from my education.',
        ][questionIndex - 1]}
      </label>
      <input
        type="number"
        className="form-control"
        style={{ width: '80px', marginRight: '50px', borderRadius: '10px', fontSize: '30px', borderWidth: '1px' }}
        id={`category0_question${questionIndex}`}
        onChange={(event) => this.handleInputChange(event, 0, questionIndex)}
      />
    </div>
  ))}
  <div>
    <br></br>
    <strong>_____{scores[0]}______ Total score (1) {options.labels[0]}</strong>
    <br></br>
    <br></br>
  </div>
</div>




<div style={{ marginTop: 50, backgroundColor: '#e4e5e3', width: '65%', borderRadius: '30px', paddingLeft: '50px', paddingTop: '30px', color: '#A50014' }}>
  <h4 className="mb-3" style={{ color: '#475239', fontWeight: 'bold' , fontSize: '20px'}}>{options.labels[1]}</h4>
  {[1, 2, 3, 4, 5, 6, 7, 8].map((questionIndex) => (
    <div key={questionIndex} className="mb-2" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '4px' }}>
      <label htmlFor={`category1_question${questionIndex}`} style={{ flex: 1, fontSize: '16px' }}>
        {questionIndex}. {[
          'I am aware of my cultural biases and open to understanding people with different backgrounds',
          'I build rewarding relationships with people from other cultures and races.',
          'I can point out examples of discrimination and effectively respond to them',
          'I study in a way that draws on my preferred learning styles.',
          'I practice using several different learning styles when I study.',
          'I take specific steps to make a successful transition into higher education',
          'I use a sound process for defining my special areas of interest and choosing an academic major or program of study.',
          'I effectively integrate schooling with my family and work lives.',
        ][questionIndex - 1]}
      </label>
      <input
        type="number"
        className="form-control"
        style={{ width: '80px', marginRight: '50px', borderRadius: '10px', fontSize: '30px', borderWidth: '1px' }}
        id={`category1_question${questionIndex}`}
        onChange={(event) => this.handleInputChange(event, 1, questionIndex)}
      />
    </div>
  ))}
  <div>
    <br></br>
    <strong>_____{scores[1]}______ Total score (2) {options.labels[1]}</strong>
    <br></br>
    <br></br>
  </div>
</div>



<div style={{ marginTop: 50, backgroundColor: '#e4e5e3', width: '65%', borderRadius: '30px', paddingLeft: '50px', paddingTop: '30px', color: '#A50014' }}>
  <h4 className="mb-3" style={{ color: '#475239', fontWeight: 'bold' , fontSize: '20px'}}>{options.labels[2]}</h4>
  {[1, 2, 3, 4, 5, 6, 7, 8].map((questionIndex) => (
    <div key={questionIndex} className="mb-2" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '4px' }}>
      <label htmlFor={`category2_question${questionIndex}`} style={{ flex: 1, fontSize: '16px' }}>
        {questionIndex}. {[
          'I periodically refine my long term goals.',
          'I regularly define short term goals.',
          'I write a plan for each day and each week.',
          'I assign priorities to what I choose to do each day.',
          'I plan review time so I don’t have to cram before tests.',
          'I plan regular recreation time.',
          'I adjust my study time to meet the demands of individual courses.',
          'I have adequate time each day to accomplish what I plan.',
        ][questionIndex - 1]}
      </label>
      <input
        type="number"
        className="form-control"
        style={{ width: '80px', marginRight: '50px', borderRadius: '10px', fontSize: '30px', borderWidth: '1px' }}
        id={`category2_question${questionIndex}`}
        onChange={(event) => this.handleInputChange(event, 2, questionIndex)}
      />
    </div>
  ))}
  <div>
    <br></br>
    <strong>_____{scores[2]}______ Total score (3) {options.labels[2]}</strong>
    <br></br>
    <br></br>
  </div>
</div>

<div style={{ marginTop: 50, backgroundColor: '#e4e5e3', width: '65%', borderRadius: '30px', paddingLeft: '50px', paddingTop: '30px', color: '#A50014' }}>
  <h4 className="mb-3" style={{ color: '#475239', fontWeight: 'bold' , fontSize: '20px'}}>{options.labels[3]}</h4>
  {[1, 2, 3, 4, 5, 6, 7, 8].map((questionIndex) => (
    <div key={questionIndex} className="mb-2" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '4px' }}>
      <label htmlFor={`category3_question${questionIndex}`} style={{ flex: 1, fontSize: '16px' }}>
        {questionIndex}. {[
          'I am confident in my ability to remember.',
          'I remember people’s names.',
          'At the end of a lecture I can summarize what was presented.',
          'I apply techniques that enhance my memory skills.',
          'I can recall information when I’m under pressure.',
          'I remember important information clearly and easily.',
          'I can jog my memory when I have difficulty recalling.',
          ''
        ][questionIndex - 1]}
      </label>
      <input
        type="number"
        className="form-control"
        style={{ width: '80px', marginRight: '50px', borderRadius: '10px', fontSize: '30px', borderWidth: '1px' }}
        id={`category3_question${questionIndex}`}
        onChange={(event) => this.handleInputChange(event, 3, questionIndex)}
      />
    </div>
  ))}
  <div>
    <br></br>
    <strong>_____{scores[3]}______ Total score (4) {options.labels[3]}</strong>
    <br></br>
    <br></br>
  </div>
</div>


<div style={{ marginTop: 50, backgroundColor: '#e4e5e3', width: '65%', borderRadius: '30px', paddingLeft: '50px', paddingTop: '30px', color: '#A50014' }}>
  <h4 className="mb-3" style={{ color: '#475239', fontWeight: 'bold' , fontSize: '20px'}}>{options.labels[4]}</h4>
  {[1, 2, 3, 4, 5, 6, 7, 8].map((questionIndex) => (
    <div key={questionIndex} className="mb-2" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '4px' }}>
      <label htmlFor={`category4_question${questionIndex}`} style={{ flex: 1, fontSize: '16px' }}>
        {questionIndex}. {[
          'I Preview and review reading assignments.',
          'When reading, I underline or highlight important passages.',
          'When I read, I ask questions about the material.',
          'When I read textbooks, I am alert and awake.',
          'I relate what I read to my life.',
          'I select a reading strategy to fit the type of material I’m reading.',
          'I take effective notes when I read.',
          'When I don’t understand what I’m reading, I note my question and find my answers.',
        ][questionIndex - 1]}
      </label>
      <input
        type="number"
        className="form-control"
        style={{ width: '80px', marginRight: '50px', borderRadius: '10px', fontSize: '30px', borderWidth: '1px' }}
        id={`category4_question${questionIndex}`}
        onChange={(event) => this.handleInputChange(event, 4, questionIndex)}
      />
    </div>
  ))}
  <div>
    <br></br>
    <strong>_____{scores[4]}______ Total score (5) {options.labels[4]}</strong>
    <br></br>
    <br></br>
  </div>
</div>


<div style={{ marginTop: 50, backgroundColor: '#e4e5e3', width: '65%', borderRadius: '30px', paddingLeft: '50px', paddingTop: '30px', color: '#A50014' }}>
  <h4 className="mb-3" style={{ color: '#475239', fontWeight: 'bold' , fontSize: '20px'}}>{options.labels[5]}</h4>
  {[1, 2, 3, 4, 5, 6, 7, 8].map((questionIndex) => (
    <div key={questionIndex} className="mb-2" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '4px' }}>
      <label htmlFor={`category5_question${questionIndex}`} style={{ flex: 1, fontSize: '16px' }}>
        {questionIndex}. {[
          'When I’m in class I focus my attention.',
          'I take notes in class.',
          'I am aware of various methods for taking notes and choose that work best for me.',
          'My notes are valuable for review.',
          'I review class notes within 24 hours.',
          'I distinguish important material and notice key phrases in a lecture.',
          'I copy material the instructor writes on the board or overhead projector.',
          'I can put important concepts into my own words.'
        ][questionIndex - 1]}
      </label>
      <input
        type="number"
        className="form-control"
        style={{ width: '80px', marginRight: '50px', borderRadius: '10px', fontSize: '30px', borderWidth: '1px' }}
        id={`category5_question${questionIndex}`}
        onChange={(event) => this.handleInputChange(event, 5, questionIndex)}
      />
    </div>
  ))}
  <div>
    <br></br>
    <strong>_____{scores[5]}______ Total score (6) {options.labels[5]}</strong>
    <br></br>
    <br></br>
  </div>
</div>


<div style={{ marginTop: 50, backgroundColor: '#e4e5e3', width: '65%', borderRadius: '30px', paddingLeft: '50px', paddingTop: '30px', color: '#A50014' }}>
  <h4 className="mb-3" style={{ color: '#475239', fontWeight: 'bold' , fontSize: '20px'}}>{options.labels[6]}</h4>
  {[1, 2, 3, 4, 5, 6, 7, 8].map((questionIndex) => (
    <div key={questionIndex} className="mb-2" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '4px' }}>
      <label htmlFor={`category6_question${questionIndex}`} style={{ flex: 1, fontSize: '16px' }}>
        {questionIndex}. {[
          'I feel confident and calm during an exam.',
          'I can manage my time during exams and I can able to complete them.',
          'I am able to predict test questions.',
          'I can examine essay questions in light of what I know and come to new original conclusions during a test.',
          'I adapt my test taking strategy to the kind of test I’m taking.',
          'I understand what essay questions ask and can answer them completely and accurately.',
          'I start reviewing for tests at the beginning of the term and review regularly.',
          'My sense of personal worth is independent of my personal scores.'
        ][questionIndex - 1]}
      </label>
      <input
        type="number"
        className="form-control"
        style={{ width: '80px', marginRight: '50px', borderRadius: '10px', fontSize: '30px', borderWidth: '1px' }}
        id={`category6_question${questionIndex}`}
        onChange={(event) => this.handleInputChange(event, 6, questionIndex)}
      />
    </div>
  ))}
  <div>
    <br></br>
    <strong>_____{scores[6]}______ Total score (7) {options.labels[6]}</strong>
    <br></br>
    <br></br>
  </div>
</div>


<div style={{ marginTop: 50, backgroundColor: '#e4e5e3', width: '65%', borderRadius: '30px', paddingLeft: '50px', paddingTop: '30px', color: '#A50014' }}>
  <h4 className="mb-3" style={{ color: '#475239', fontWeight: 'bold' , fontSize: '20px'}}>{options.labels[7]}</h4>
  {[1, 2, 3, 4, 5, 6, 7, 8].map((questionIndex) => (
    <div key={questionIndex} className="mb-2" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '4px' }}>
      <label htmlFor={`category7_question${questionIndex}`} style={{ flex: 1, fontSize: '16px' }}>
        {questionIndex}. {[
          'I have flashes of insight, and solutions to problems appear to me at unusual times.',
          'I use brainstorming to generate solutions to a variety of problems.',
          'When I get stuck on a creative project, I use specific methods to get unstuck.',
          'I see problems and decisions as opportunities for learning and personal growth.',
          'I am willing to consider different points of view and alternative solutions.',
          'I can state the assumptions that underline a series of assertions.',
          'I can detect common errors in logic.',
          'I approach courses in mathematics and science with confidence.'
        ][questionIndex - 1]}
      </label>
      <input
        type="number"
        className="form-control"
        style={{ width: '80px', marginRight: '50px', borderRadius: '10px', fontSize: '30px', borderWidth: '1px' }}
        id={`category7_question${questionIndex}`}
        onChange={(event) => this.handleInputChange(event, 7, questionIndex)}
      />
    </div>
  ))}
  <div>
    <br></br>
    <strong>_____{scores[7]}______ Total score (8) {options.labels[7]}</strong>
    <br></br>
    <br></br>
  </div>
</div>


<div style={{ marginTop: 50, backgroundColor: '#e4e5e3', width: '65%', borderRadius: '30px', paddingLeft: '50px', paddingTop: '30px', color: '#A50014' }}>
  <h4 className="mb-3" style={{ color: '#475239', fontWeight: 'bold' , fontSize: '20px'}}>{options.labels[8]}</h4>
  {[1, 2, 3, 4, 5, 6, 7, 8].map((questionIndex) => (
    <div key={questionIndex} className="mb-2" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '4px' }}>
      <label htmlFor={`category8_question${questionIndex}`} style={{ flex: 1, fontSize: '16px' }}>
        {questionIndex}. {[
          'I approach writing with confidence.',
          'I can effectively plan a large writing assignment.',
          'I create first drafts without stopping to edit or criticize my writing.',
          'I revise my writing for clarity, accuracy and coherence.',
          'My writing affirms women and is free of sexist expressions.',
          'When writing. I accurately credit ideas and facts from other.',
          'I know how to prepare and deliver effective speeches.',
          'I am confident when I speak before others.'
        ][questionIndex - 1]}
      </label>
      <input
        type="number"
        className="form-control"
        style={{ width: '80px', marginRight: '50px', borderRadius: '10px', fontSize: '30px', borderWidth: '1px' }}
        id={`category8_question${questionIndex}`}
        onChange={(event) => this.handleInputChange(event, 8, questionIndex)}
      />
    </div>
  ))}
  <div>
    <br></br>
    <strong>_____{scores[8]}______ Total score (9) {options.labels[8]}</strong>
    <br></br>
    <br></br>
  </div>
</div>


<div style={{ marginTop: 50, backgroundColor: '#e4e5e3', width: '65%', borderRadius: '30px', paddingLeft: '50px', paddingTop: '30px', color: '#A50014' }}>
  <h4 className="mb-3" style={{ color: '#475239', fontWeight: 'bold' , fontSize: '20px'}}>{options.labels[9]}</h4>
  {[1, 2, 3, 4, 5, 6, 7, 8].map((questionIndex) => (
    <div key={questionIndex} className="mb-2" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' , marginBottom: '4px'}}>
      <label htmlFor={`category9_question${questionIndex}`} style={{ flex: 1, fontSize: '16px' }}>
        {questionIndex}. {[
          'I develop and maintain mutually supportive relationships.',
          'I am candid with others about who I am, what I feel and what I want.',
          'Other people tell me that I am a good listener.',
          'I communicate my upset and anger without blaming others.',
          'I make and keep promises that stretch me to meet my potentials.',
          'I am able to learn from various instructors with different teaching styles.',
          'I have the ability to make friends and create valuable relationship in a new place.',
          'I am open to being with people I don’t especially like in order to learn from them.'
        ][questionIndex - 1]}
      </label>
      <input
        type="number"
        className="form-control"
        style={{ width: '80px', marginRight: '50px', borderRadius: '10px', fontSize: '30px', borderWidth: '1px' }}
        id={`category9_question${questionIndex}`}
        onChange={(event) => this.handleInputChange(event, 9, questionIndex)}
      />
    </div>
  ))}
  <div>
    <br></br>
    <strong>_____{scores[9]}______ Total score (10) {options.labels[9]}</strong>
    <br></br>
    <br></br>
  </div>
</div>


<div style={{ marginTop: 50, backgroundColor: '#e4e5e3', width: '65%', borderRadius: '30px', paddingLeft: '50px', paddingTop: '30px', color: '#A50014' }}>
  <h4 className="mb-3" style={{ color: '#475239', fontWeight: 'bold' , fontSize: '20px'}}>{options.labels[10]}</h4>
  {[1, 2, 3, 4, 5, 6, 7, 8].map((questionIndex) => (
    <div key={questionIndex} className="mb-2" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '4px' }}>
      <label htmlFor={`category10_question${questionIndex}`} style={{ flex: 1, fontSize: '16px' }}>
        {questionIndex}. {[
          'I have enough energy to study and still enjoy other areas of my life.',
          'I exercise regularly.',
          'My emotional health support my ability to learn.',
          'If the situation calls for it, I have enough reserve energy to put in a long day.',
          'I notice changes in my physical condition and respond effectively.',
          'I notice changes in my psychological condition and respond effectively.',
          'I am in control of the bad habits such as smoking, alcohol and drugs.',
          'My food and sleeping habits contribute to my health.'
        ][questionIndex - 1]}
      </label>
      <input
        type="number"
        className="form-control"
        style={{ width: '80px', marginRight: '50px', borderRadius: '10px', fontSize: '30px', borderWidth: '1px' }}
        id={`category10_question${questionIndex}`}
        onChange={(event) => this.handleInputChange(event, 10, questionIndex)}
      />
    </div>
  ))}
  <div>
    <br></br>
    <strong>_____{scores[10]}______ Total score (11) {options.labels[10]}</strong>
    <br></br>
    <br></br>
  </div>
</div>



<div style={{ marginTop: 50, backgroundColor: '#e4e5e3', width: '65%', borderRadius: '30px', paddingLeft: '50px', paddingTop: '30px', color: '#A50014' }}>
  <h4 className="mb-3" style={{ color: '#475239', fontWeight: 'bold' , fontSize: '20px'}}>{options.labels[11]}</h4>
  {[1, 2, 3, 4, 5, 6, 7, 8].map((questionIndex) => (
    <div key={questionIndex} className="mb-2" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '4px' }}>
      <label htmlFor={`category11_question${questionIndex}`} style={{ flex: 1, fontSize: '16px' }}>
        {questionIndex}. {[
          'I budget my money and I am in control of my personal finances.',
          'I am confident that I will have enough to complete the education I want.',
          'I have a clear picture of the financial resources available to me to pay for my education.',
          'I can make a little money go a long way.',
          'My education supports my long rang financial goals.',
          'I repay my debts on time.',
          'My sense of personal worth is independent of my financial condition.',
          'I make regular deposits to my savings accounts.'
        ][questionIndex - 1]}
      </label>
      <input
        type="number"
        className="form-control"
        style={{ width: '80px', marginRight: '50px', borderRadius: '10px', fontSize: '30px', borderWidth: '1px' }}
        id={`category11_question${questionIndex}`}
        onChange={(event) => this.handleInputChange(event, 11, questionIndex)}
      />
    </div>
  ))}
  <div>
    <br></br>
    <strong>_____{scores[11]}______ Total score (12) {options.labels[11]}</strong>
    <br></br>
    <br></br>
  </div>
</div>


<div style={{ marginTop: 50, backgroundColor: '#e4e5e3', width: '65%', borderRadius: '30px', paddingLeft: '50px', paddingTop: '30px', color: '#A50014' }}>
  <h4 className="mb-3" style={{ color: '#475239', fontWeight: 'bold', fontSize: '20px' }}>{options.labels[12]}</h4>
  {[1, 2, 3, 4, 5, 6, 7, 8].map((questionIndex) => (
    <div key={questionIndex} className="mb-2" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '4px' }}>
      <label htmlFor={`category12_question${questionIndex}`} style={{ flex: 1, fontSize: '16px' }}>
        {questionIndex}. {[
          'I can effectively use libraries to find the resources and information I want.',
          'I am aware of the services offered by my school as learning experiences.',
          'I use my job or other activities outside of school as learning experiences.',
          'I take on projects that can make a difference in other people’s lives.',
          'I know where to get help in my community for a variety of problems.',
          'My relationships with friends, family and other support my educational goals.',
          'I think of my mistakes as valuable opportunities to learn.',
          'I see the world’s problems as opportunities for me to participate and contribute.'
        ][questionIndex - 1]}
      </label>
      <input
        type="number"
        className="form-control"
        style={{ width: '80px', marginRight: '50px', borderRadius: '10px', fontSize: '30px', borderWidth: '1px' }}
        id={`category12_question${questionIndex}`}
        onChange={(event) => this.handleInputChange(event, 12, questionIndex)}
      />
    </div>
  ))}
  <div>
    <br></br>
    <strong>_____{scores[12]}______ Total score (13) {options.labels[12]}</strong>
    <br></br>
    <br></br>
  </div>
</div>



<div style={{ marginTop: 50, backgroundColor: '#e4e5e3', width: '65%', borderRadius: '30px', paddingLeft: '50px', paddingTop: '30px', color: '#A50014' }}>
  <h4 className="mb-3" style={{ color: '#475239', fontWeight: 'bold', fontSize: '20px' }}>{options.labels[13]}</h4>
  {[1, 2, 3, 4, 5, 6, 7, 8].map((questionIndex) => (
    <div key={questionIndex} className="mb-2" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' , marginBottom: '4px'}}>
      <label htmlFor={`category13_question${questionIndex}`} style={{ flex: 1, fontSize: '16px' }}>
        {questionIndex}. {[
          'I see learning as a life process.',
          'I relate school to what I plan to do for the rest of my life.',
          'I learn by contributing to others.',
          'I revise my plans as I learn, change and grow.',
          'I am clear about my purpose in life.',
          'I know that I am responsible for my own education.',
          'I take responsibility for the quality of my life.',
          'I am willing to accept challenges even when I’m not sure how to meet them.'
        ][questionIndex - 1]}
      </label>
      <input
        type="number"
        className="form-control"
        style={{ width: '80px', marginRight: '50px', borderRadius: '10px', fontSize: '30px', borderWidth: '1px' }}
        id={`category13_question${questionIndex}`}
        onChange={(event) => this.handleInputChange(event, 13, questionIndex)}
      />
    </div>
  ))}
  <div>
    <br></br>
    <strong>_____{scores[13]}______ Total score (14) {options.labels[13]}</strong>
    <br></br>
    <br></br>
  </div>
</div>


{/* Add questions for category 14 (Purpose) here */}
<br></br>
<br></br>
<button
  type="button"
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  onClick={this.handleRefresh}
>
  Refresh Chart
</button>

</form>
        </div>
      </>
    );
  }
}

export default ApexChart;
