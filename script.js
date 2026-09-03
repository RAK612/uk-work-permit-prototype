// Application State
const appState = {
    currentStage: 'initiation',
    stages: [
        'initiation',
        'eligibility',
        'salary',
        'sponsorship',
        'deputation',
        'review',
        'cos',
        'visa',
        'travel',
        'onboarding',
        'rtw',
        'completion'
    ],
    formData: {},
    stageIndex: 0
};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    updateProgressBar();
});

function initializeApp() {
    console.log('UK Work Permit Prototype Initialized');
    updateProgressBar();
}

// Setup Event Listeners
function setupEventListeners() {
    // Initiation Form
    const initiationForm = document.getElementById('initiationForm');
    if (initiationForm) {
        initiationForm.addEventListener('submit', handleInitiation);
    }

    // Sponsorship Form
    const sponsorshipForm = document.getElementById('sponsorshipForm');
    if (sponsorshipForm) {
        sponsorshipForm.addEventListener('submit', handleSponsorship);
    }

    // Deputation Form
    const deputationForm = document.getElementById('deputationForm');
    if (deputationForm) {
        deputationForm.addEventListener('submit', handleDeputation);
    }

    // Visa Form
    const visaForm = document.getElementById('visaForm');
    if (visaForm) {
        visaForm.addEventListener('submit', handleVisaSubmission);
    }

    // Travel Form
    const travelForm = document.getElementById('travelForm');
    if (travelForm) {
        travelForm.addEventListener('submit', handleTravelSubmission);
    }

    // Onboarding Form
    const onboardingForm = document.getElementById('onboardingForm');
    if (onboardingForm) {
        onboardingForm.addEventListener('submit', handleOnboardingSubmission);
    }

    // RTW Form
    const rtwForm = document.getElementById('rtwForm');
    if (rtwForm) {
        rtwForm.addEventListener('submit', handleRTWSubmission);
    }

    // Salary Form
    const salaryForm = document.getElementById('salaryForm');
    if (salaryForm) {
        salaryForm.addEventListener('submit', handleSalarySubmission);
    }
}

// Stage Navigation
function showStage(stageName) {
    // Hide all stages
    const stages = document.querySelectorAll('.stage');
    stages.forEach(stage => {
        stage.style.display = 'none';
    });

    // Show selected stage
    const selectedStage = document.getElementById(`stage-${stageName}`);
    if (selectedStage) {
        selectedStage.style.display = 'block';
        appState.currentStage = stageName;
        appState.stageIndex = appState.stages.indexOf(stageName);
        updateProgressBar();
        updateNavigationButtons();
    }
}

function nextStage(stageName = null) {
    if (stageName) {
        showStage(stageName);
    } else {
        if (appState.stageIndex < appState.stages.length - 1) {
            appState.stageIndex++;
            showStage(appState.stages[appState.stageIndex]);
        }
    }
}

function previousStage() {
    if (appState.stageIndex > 0) {
        appState.stageIndex--;
        showStage(appState.stages[appState.stageIndex]);
    }
}

// Handle Form Submissions
function handleInitiation(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {
        applicantName: formData.get('applicantName'),
        email: formData.get('email'),
        jobTitle: formData.get('jobTitle'),
        company: formData.get('company'),
        nationality: formData.get('nationality')
    };

    appState.formData = { ...appState.formData, ...data };
    console.log('Initiation Data Saved:', data);
    
    nextStage('eligibility');
}

function checkEligibility() {
    const checks = {
        passportValid: document.getElementById('passportValid').checked,
        noViolations: document.getElementById('noViolations').checked,
        qualifications: document.getElementById('qualifications').checked,
        englishLevel: document.getElementById('englishLevel').checked,
        sponsorLicense: document.getElementById('sponsorLicense').checked
    };

    const allChecked = Object.values(checks).every(val => val === true);
    const statusBox = document.getElementById('eligibilityStatus');

    if (allChecked) {
        statusBox.className = 'status-box show success';
        statusBox.innerHTML = '<strong>✓ Eligible</strong><br>You meet all eligibility requirements. Please proceed to salary verification.';
        appState.formData.eligibilityPassed = true;
        
        setTimeout(() => {
            nextStage('salary');
        }, 2000);
    } else {
        statusBox.className = 'status-box show error';
        statusBox.innerHTML = '<strong>✗ Not Eligible</strong><br>You do not meet all the eligibility requirements. Please address the unchecked items.';
        appState.formData.eligibilityPassed = false;
    }
}

function verifySalary() {
    const salary = parseFloat(document.getElementById('annualSalary').value);
    const minSalary = 26200;
    const statusBox = document.getElementById('salaryStatus');

    if (salary >= minSalary) {
        statusBox.className = 'status-box show success';
        statusBox.innerHTML = '<strong>✓ Salary Verified</strong><br>Your salary meets the UK work permit minimum threshold.';
        appState.formData.salaryVerified = true;
        
        setTimeout(() => {
            nextStage('sponsorship');
        }, 2000);
    } else {
        statusBox.className = 'status-box show error';
        statusBox.innerHTML = `<strong>✗ Salary Too Low</strong><br>Minimum required: £${minSalary.toLocaleString()}. Your salary: £${salary.toLocaleString()}`;
        appState.formData.salaryVerified = false;
    }
}

function handleSalarySubmission(e) {
    e.preventDefault();
    verifySalary();
}

function handleSponsorship(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {
        sponsorName: formData.get('sponsorName'),
        sponsorLicenseNo: formData.get('sponsorLicenseNo'),
        payingParty: formData.get('payingParty')
    };

    appState.formData = { ...appState.formData, ...data };
    console.log('Sponsorship Data Saved:', data);
    
    nextStage('deputation');
}

function handleDeputation(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {
        assignmentDuration: formData.get('assignmentDuration'),
        deputationConfirmed: formData.get('deputationConfirm')
    };

    appState.formData = { ...appState.formData, ...data };
    console.log('Deputation Data Saved:', data);
    
    nextStage('review');
}

function simulateApproval() {
    const timeline = document.querySelectorAll('.timeline-marker');
    
    // Simulate progression
    timeline.forEach((marker, index) => {
        setTimeout(() => {
            marker.classList.remove('pending');
            if (index === timeline.length - 1) {
                marker.classList.add('completed');
            } else {
                marker.classList.add('completed');
            }
        }, index * 800);
    });

    // Move to next stage after simulation
    setTimeout(() => {
        showCertificateOfSponsorship();
        nextStage('cos');
    }, 4000);
}

function showCertificateOfSponsorship() {
    const applicantName = appState.formData.applicantName || 'John Doe';
    const sponsorName = appState.formData.sponsorName || 'ABC Company Ltd';
    const jobTitle = appState.formData.jobTitle || 'Senior Software Engineer';
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-GB', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });

    document.getElementById('cosApplicant').textContent = applicantName;
    document.getElementById('cosSponsor').textContent = sponsorName;
    document.getElementById('cosJob').textContent = jobTitle;
    document.getElementById('cosIssueDate').textContent = formattedDate;
    
    // Generate unique CoS number
    const cosNumber = `CS-${today.getFullYear()}-${Math.floor(Math.random() * 999999).toString().padStart(6, '0')}`;
    document.getElementById('cosNumber').textContent = cosNumber;
}

function downloadCOS() {
    alert('Certificate of Sponsorship PDF downloaded successfully!\n\nPlease save this document as you will need it for your visa application.');
}

function handleVisaSubmission(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {
        passportNumber: formData.get('passportNumber'),
        visaType: formData.get('visaType'),
        appointmentDate: formData.get('appointmentDate'),
        visaCentre: formData.get('visaCentre')
    };

    appState.formData = { ...appState.formData, ...data };
    console.log('Visa Data Saved:', data);

    const statusBox = document.getElementById('visaStatus');
    statusBox.className = 'status-box show success';
    statusBox.innerHTML = '<strong>✓ Visa Application Submitted</strong><br>Your application has been submitted to the visa processing centre. You will receive a receipt and can track your application status online.';
    
    setTimeout(() => {
        nextStage('travel');
    }, 2000);
}

function handleTravelSubmission(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {
        arrivalDate: formData.get('arrivalDate'),
        ukAddress: formData.get('ukAddress')
    };

    appState.formData = { ...appState.formData, ...data };
    console.log('Travel Data Saved:', data);
    
    nextStage('onboarding');
}

function handleOnboardingSubmission(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {
        startDate: formData.get('startDate')
    };

    appState.formData = { ...appState.formData, ...data };
    console.log('Onboarding Data Saved:', data);
    
    nextStage('rtw');
}

function handleRTWSubmission(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const ninoProvided = formData.get('ninoProvided');
    const nino = ninoProvided.replace(/\s+/g, '');

    // Simple NINO format validation (2 letters + 6 numbers + 1 letter)
    const ninoRegex = /^[A-Z]{2}\d{6}[A-Z]$/;
    const statusBox = document.getElementById('rtwStatus');

    if (ninoRegex.test(nino)) {
        statusBox.className = 'status-box show success';
        statusBox.innerHTML = '<strong>✓ Right to Work Verified</strong><br>Your right to work in the UK has been confirmed. You are cleared to commence employment.';
        appState.formData.rtwVerified = true;
        
        setTimeout(() => {
            showCompletion();
            nextStage('completion');
        }, 2000);
    } else {
        statusBox.className = 'status-box show error';
        statusBox.innerHTML = '<strong>✗ Invalid NI Number Format</strong><br>Please enter a valid National Insurance Number (format: AB 12 34 56 C)';
        appState.formData.rtwVerified = false;
    }
}

function showCompletion() {
    const summaryBox = document.getElementById('completionSummary');
    
    let summaryHTML = '';
    
    // Create summary items
    const summaryItems = [
        { label: 'Full Name', value: appState.formData.applicantName || 'N/A' },
        { label: 'Email', value: appState.formData.email || 'N/A' },
        { label: 'Job Title', value: appState.formData.jobTitle || 'N/A' },
        { label: 'Employer', value: appState.formData.company || 'N/A' },
        { label: 'Sponsor', value: appState.formData.sponsorName || 'N/A' },
        { label: 'Visa Type', value: appState.formData.visaType || 'N/A' },
        { label: 'UK Arrival Date', value: appState.formData.arrivalDate || 'N/A' },
        { label: 'Employment Start Date', value: appState.formData.startDate || 'N/A' }
    ];

    summaryItems.forEach(item => {
        summaryHTML += `
            <div class="summary-item">
                <label>${item.label}</label>
                <value>${item.value}</value>
            </div>
        `;
    });

    summaryBox.innerHTML = summaryHTML;
}

function downloadReport() {
    const reportContent = `
UK WORK PERMIT APPLICATION - COMPLETION REPORT
================================================

APPLICANT INFORMATION
Applicant Name: ${appState.formData.applicantName || 'N/A'}
Email: ${appState.formData.email || 'N/A'}
Nationality: ${appState.formData.nationality || 'N/A'}

EMPLOYMENT DETAILS
Job Title: ${appState.formData.jobTitle || 'N/A'}
Employer: ${appState.formData.company || 'N/A'}
Sponsor: ${appState.formData.sponsorName || 'N/A'}
Sponsor License: ${appState.formData.sponsorLicenseNo || 'N/A'}

VISA INFORMATION
Visa Type: ${appState.formData.visaType || 'N/A'}
Passport Number: ${appState.formData.passportNumber || 'N/A'}
Appointment Date: ${appState.formData.appointmentDate || 'N/A'}
Visa Centre: ${appState.formData.visaCentre || 'N/A'}

TRAVEL & ONBOARDING
UK Arrival Date: ${appState.formData.arrivalDate || 'N/A'}
UK Address: ${appState.formData.ukAddress || 'N/A'}
Employment Start Date: ${appState.formData.startDate || 'N/A'}

STATUS
Right to Work Verified: ${appState.formData.rtwVerified ? 'Yes' : 'Pending'}

Generated: ${new Date().toLocaleString()}
================================================
    `;

    // Create blob and download
    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'UK_Work_Permit_Report.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}

function startNew() {
    // Reset application state
    appState.formData = {};
    appState.stageIndex = 0;
    appState.currentStage = 'initiation';
    
    // Reset all forms
    const forms = document.querySelectorAll('form');
    forms.forEach(form => form.reset());

    // Reset all checkboxes and progress
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
    
    // Show first stage
    showStage('initiation');
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Update Progress Bar
function updateProgressBar() {
    const totalStages = appState.stages.length;
    const currentIndex = appState.stageIndex;
    const progressPercentage = ((currentIndex + 1) / totalStages) * 100;

    const progressFill = document.getElementById('progressFill');
    if (progressFill) {
        progressFill.style.width = progressPercentage + '%';
    }

    // Update step indicators
    const stepIndicator = document.getElementById('stepIndicator');
    if (stepIndicator) {
        let stepsHTML = '';
        appState.stages.forEach((stage, index) => {
            let className = 'step-indicator-dot';
            if (index === currentIndex) {
                className += ' active';
            } else if (index < currentIndex) {
                className += ' completed';
            }
            stepsHTML += `<div class="${className}" title="${stage}"></div>`;
        });
        stepIndicator.innerHTML = stepsHTML;
    }
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Show/hide previous button
    if (appState.stageIndex > 0) {
        if (prevBtn) prevBtn.style.display = 'inline-block';
    } else {
        if (prevBtn) prevBtn.style.display = 'none';
    }

    // Show/hide next button
    if (appState.stageIndex < appState.stages.length - 1) {
        if (nextBtn) nextBtn.style.display = 'inline-block';
    } else {
        if (nextBtn) nextBtn.style.display = 'none';
    }
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') {
        nextStage();
    } else if (e.key === 'ArrowLeft') {
        previousStage();
    }
});

// Export application data
function exportApplicationData() {
    const dataJson = JSON.stringify(appState.formData, null, 2);
    const blob = new Blob([dataJson], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'uk_work_permit_application_data.json';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}

// Save draft periodically
setInterval(() => {
    const draftData = JSON.stringify(appState.formData);
    localStorage.setItem('uk_work_permit_draft', draftData);
    console.log('Draft saved automatically');
}, 30000); // Every 30 seconds

// Load draft on startup
window.addEventListener('load', () => {
    const savedDraft = localStorage.getItem('uk_work_permit_draft');
    if (savedDraft) {
        try {
            appState.formData = JSON.parse(savedDraft);
            console.log('Draft loaded from local storage');
        } catch (e) {
            console.error('Error loading draft:', e);
        }
    }
});
