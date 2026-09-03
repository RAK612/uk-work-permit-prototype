![UK Work Permit Prototype](https://img.shields.io/badge/Status-Active-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)
![Version](https://img.shields.io/badge/Version-1.0.0-brightblue)

# 🇬🇧 UK Work Permit Process Prototype

A comprehensive, interactive web application that simulates the complete end-to-end UK work permit application process flow. This prototype provides a user-friendly interface for understanding and navigating through all stages of obtaining a UK work visa.

## 📋 Overview

This prototype walks applicants through the complete UK work permit journey, from initial application through to employment commencement and right-to-work verification. It includes validation, status tracking, and comprehensive guidance at each stage.

## 🚀 Key Features

### Complete End-to-End Workflow (11 Stages)

1. **Application Initiation** 
   - Collect applicant personal and employment information
   - Initial application details capture

2. **Eligibility Check**
   - Verify passport validity
   - Confirm criminal background check
   - Validate qualifications and experience
   - Check English language proficiency
   - Confirm employer sponsorship license

3. **Salary Verification**
   - Validate annual salary against minimum thresholds
   - Support for salary evidence upload
   - Real-time salary threshold validation (£26,200+)

4. **Sponsorship & Costs**
   - Display visa application fees
   - Show immigration health surcharge costs
   - Explain sponsor levy requirements
   - Capture sponsor organization details
   - Determine fee payment responsibility

5. **Deputation Letter**
   - Upload assignment/deputation letter
   - Specify assignment duration
   - Confirm letter authenticity

6. **Immigration Team Review**
   - Visual timeline of review process
   - Document verification status
   - Background check progress
   - Sponsor verification tracking
   - Final decision pending

7. **Certificate of Sponsorship (CoS)**
   - Generate unique CoS number
   - Display certificate preview
   - Download certificate functionality
   - 90-day validity confirmation

8. **Visa Filing & Application**
   - Capture passport details
   - Select visa type
   - Schedule visa appointment
   - Specify visa application centre
   - Submit visa application

9. **Travel to UK**
   - Pre-travel checklist
   - Confirm arrival date
   - Capture UK residential address
   - Verify travel preparation

10. **UK Onboarding**
    - Home Office registration
    - National Insurance Number application
    - Bank account setup
    - Permanent accommodation confirmation
    - NHS GP registration
    - Employer onboarding tasks

11. **Right to Work (RTW) Check**
    - National Insurance Number validation
    - Date of birth confirmation
    - RTW verification completion
    - Employment clearance

12. **Completion & Summary**
    - Success confirmation
    - Application summary display
    - Full report download
    - Important reminders

### Advanced Features

- ✅ **Progress Tracking**: Visual progress bar showing application completion
- ✅ **Form Validation**: Real-time validation with helpful error messages
- ✅ **Auto-Save**: Draft automatically saved to local storage every 30 seconds
- ✅ **Keyboard Navigation**: Use arrow keys to navigate between stages
- ✅ **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- ✅ **Data Export**: Download application report as text file
- ✅ **Interactive Timeline**: Visual representation of review process
- ✅ **Status Indicators**: Real-time status updates for each stage
- ✅ **Comprehensive Guidance**: Help text and information boxes at each stage

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Storage**: Browser LocalStorage for draft saving
- **No Dependencies**: Pure vanilla JavaScript (no frameworks required)
- **Responsive**: CSS Grid and Flexbox for responsive layouts

## 📊 Application Processing Times (Reference)

- **Standard Processing**: 8 weeks
- **Priority Processing**: 2-4 weeks
- **CoS Validity**: 90 days

## 💰 Cost Breakdown (Reference)

| Item | Amount |
|------|--------|
| Visa Application Fee | £719 |
| Immigration Health Surcharge | £1,035/year |
| Sponsor Levy (if applicable) | £199/quarter |
| **Estimated Total** | **£1,953+** |

## 📁 File Structure

```
uk-work-permit-prototype/
├── index.html       # Main application structure and stages
├── styles.css       # Complete styling and responsive design
├── script.js        # Application logic and interactivity
├── README.md        # This file
└── .gitignore       # Git ignore file
```

## 🎯 How to Use

### 1. Access the Application

Visit the GitHub Pages deployment:
```
https://RAK612.github.io/uk-work-permit-prototype/
```

Or open `index.html` directly in your browser.

### 2. Navigate Through Stages

- **Click "Proceed"** buttons to move forward
- **Use "← Previous"** to go back
- **Use Arrow Keys** (← →) for keyboard navigation

### 3. Complete Forms

- Fill in required information at each stage
- Forms validate automatically
- Follow helpful guidance and reminders

### 4. Track Progress

- View progress bar at the top
- See stage indicators showing completion status
- Check status messages for validation results

### 5. Download Documents

- Download Certificate of Sponsorship (simulated)
- Export full application report at completion
- Save draft data automatically

## 🔄 Data Flow

```
Initiation
    ↓
Eligibility Check
    ↓
Salary Verification
    ↓
Sponsorship & Costs
    ↓
Deputation Letter
    ↓
Immigration Review
    ↓
Certificate of Sponsorship
    ↓
Visa Filing
    ↓
Travel Preparation
    ↓
UK Onboarding
    ↓
Right to Work Check
    ↓
Completion
```

## 💾 Local Storage Features

The application automatically saves your progress:

- **Draft Saving**: Saves every 30 seconds automatically
- **Auto-Load**: Loads saved data when you return
- **Manual Export**: Download complete application data as JSON

To clear saved data:
```javascript
localStorage.removeItem('uk_work_permit_draft');
```

## 🎨 Design Features

- **Modern UI**: Clean, professional interface with gradient backgrounds
- **Color Scheme**: Purple/blue gradient primary colors
- **Typography**: Clear hierarchy with readable fonts
- **Icons & Emojis**: Visual indicators for different sections
- **Animations**: Smooth transitions and progress indicators
- **Accessibility**: Semantic HTML and proper form labels

## 📱 Responsive Breakpoints

- **Desktop**: Full layout optimization (1024px+)
- **Tablet**: Optimized for 768px - 1023px
- **Mobile**: Fully responsive for <768px

## 🔧 Customization

### Modify Stage Content

Edit the HTML in `index.html` to customize stage content:

```html
<div class="stage" id="stage-stagename" data-stage="stagename">
    <!-- Custom content here -->
</div>
```

### Adjust Styling

Modify `styles.css` to change:
- Colors and gradients
- Spacing and padding
- Font sizes and families
- Layout breakpoints

### Add New Stages

1. Add new stage HTML in `index.html`
2. Add stage name to `appState.stages` array in `script.js`
3. Add corresponding form handler in `script.js`

## ✨ Features in Detail

### Eligibility Verification
- 5-point checklist for quick eligibility assessment
- Automatic progression when all criteria met
- Clear error messaging for unmet requirements

### Salary Validation
- Real-time salary threshold checking
- £26,200 minimum threshold validation
- Support for different salary structures
- Proof of income upload capability

### Interactive Timeline
- Visual representation of immigration review process
- Color-coded status indicators (completed, in-progress, pending)
- Pulse animation for in-progress items
- Simulated approval process

### Certificate Generation
- Unique CoS number generation
- Dynamic certificate preview
- Applicant and sponsor information display
- 90-day validity tracking

### Completion Report
- Comprehensive application summary
- All captured data review
- Print/save capability
- Important compliance reminders

## 🚨 Important Legal Disclaimer

**This is a prototype for educational and demonstration purposes only.**

This application:
- ✅ Does NOT submit actual visa applications
- ✅ Does NOT process real visa data
- ✅ Does NOT guarantee visa approval
- ✅ Is for workflow demonstration only

**For actual UK work permit applications:**
- Visit: [UK Visas and Immigration (UKVI)](https://www.gov.uk/government/organisations/uk-visas-and-immigration)
- Official Portal: [Apply for a UK visa](https://www.gov.uk/apply-uk-visa)
- Professional Advice: Consult with immigration solicitors or advisors

## 📚 UK Work Permit Resources

- [UKVI Official Website](https://www.gov.uk/government/organisations/uk-visas-and-immigration)
- [Skilled Worker Visa Guide](https://www.gov.uk/skilled-worker-visa)
- [Sponsor Guidance](https://www.gov.uk/employer-sponsorship)
- [Immigration Rules](https://www.gov.uk/immigration-rules)

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs and issues
- Suggest improvements
- Submit pull requests
- Improve documentation

## 📝 License

MIT License - See LICENSE file for details

## 👨‍💻 Author

Created by **RAK612**

## 📞 Support

For issues, questions, or feedback:
1. Check the [GitHub Issues](https://github.com/RAK612/uk-work-permit-prototype/issues)
2. Create a new issue with detailed description
3. Include steps to reproduce any bugs

## 🎓 Learning Resources

This prototype demonstrates:
- Complex multi-stage form handling
- State management in vanilla JavaScript
- Responsive web design
- LocalStorage API usage
- Form validation techniques
- Progressive disclosure UI pattern
- Accessibility best practices

## 📊 Application Statistics

- **Total Stages**: 11 key stages + completion
- **Form Fields**: 30+ data capture points
- **Validation Rules**: 15+ validation checks
- **Status Indicators**: Real-time updates
- **Processing Simulation**: Realistic timeline

## 🔐 Privacy & Data

- **Local Only**: All data stored locally in browser
- **No Transmission**: No data sent to external servers
- **Clearable**: Users can clear data anytime
- **Draft Auto-Save**: Automatic persistence for convenience

## 🚀 Deployment

### GitHub Pages

This repository is configured for GitHub Pages:

1. Go to Settings → Pages
2. Select main branch as source
3. Access at: `https://RAK612.github.io/uk-work-permit-prototype/`

### Local Deployment

Simply open `index.html` in any modern web browser.

### Server Deployment

Copy all files to any web server. No backend required!

## 📋 Checklist for Users

Before applying for real UK work permit:

- [ ] Review official UKVI requirements
- [ ] Confirm employer sponsorship license
- [ ] Verify salary meets thresholds
- [ ] Gather required documents
- [ ] Arrange health insurance
- [ ] Plan travel arrangements
- [ ] Prepare accommodation details
- [ ] Check visa appointment availability
- [ ] Arrange funds for fees
- [ ] Consult immigration advisor if needed

## 🎯 Next Steps for Real Application

1. **Research**: Visit UKVI website
2. **Prepare**: Gather all required documents
3. **Verify**: Confirm sponsorship with employer
4. **Apply**: Submit official application
5. **Track**: Use reference number to track status
6. **Prepare**: Plan for visa appointment
7. **Travel**: Arrange travel to UK
8. **Onboard**: Complete onboarding procedures

---

## 📈 Version History

### v1.0.0 (Current)
- ✅ Complete 11-stage workflow
- ✅ Full form validation
- ✅ Interactive timeline
- ✅ Certificate generation
- ✅ Draft auto-save
- ✅ Responsive design
- ✅ Comprehensive documentation

---

**Last Updated**: September 3, 2026

**Status**: ✅ Production Ready

For more information, visit the [GitHub Repository](https://github.com/RAK612/uk-work-permit-prototype)
