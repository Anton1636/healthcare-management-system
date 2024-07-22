export const GenderOptions = ['male', 'female', 'other']

export const PatientFormDefaultValues = {
	firstName: '',
	lastName: '',
	email: '',
	phone: '',
	birthDate: new Date(Date.now()),
	gender: 'male' as Gender,
	address: '',
	occupation: '',
	emergencyContactName: '',
	emergencyContactNumber: '',
	primaryPhysician: '',
	insuranceProvider: '',
	insurancePolicyNumber: '',
	allergies: '',
	currentMedication: '',
	familyMedicalHistory: '',
	pastMedicalHistory: '',
	identificationType: 'Birth Certificate',
	identificationNumber: '',
	identificationDocument: [],
	treatmentConsent: false,
	disclosureConsent: false,
	privacyConsent: false,
}

export const IdentificationTypes = [
	'Birth Certificate',
	"Driver's License",
	'Medical Insurance Card/Policy',
	'Military ID Card',
	'National Identity Card',
	'Passport',
	'Resident Alien Card (Green Card)',
	'Social Security Card',
	'State ID Card',
	'Student ID Card',
	'Voter ID Card',
]

export const Doctors = [
	{
		image: '/assets/images/dr-green.png',
		name: 'Doctor 1',
	},
	{
		image: '/assets/images/dr-cameron.png',
		name: 'Doctor 2',
	},
	{
		image: '/assets/images/dr-livingston.png',
		name: 'Doctor 3',
	},
	{
		image: '/assets/images/dr-peter.png',
		name: 'Doctor 4',
	},
	{
		image: '/assets/images/dr-powell.png',
		name: 'Doctor 5',
	},
	{
		image: '/assets/images/dr-remirez.png',
		name: 'Doctor 6',
	},
	{
		image: '/assets/images/dr-lee.png',
		name: 'Doctor 7',
	},
	{
		image: '/assets/images/dr-cruz.png',
		name: 'Doctor 8',
	},
	{
		image: '/assets/images/dr-sharma.png',
		name: 'Doctor 9',
	},
]

export const StatusIcon = {
	scheduled: '/assets/icons/check.svg',
	pending: '/assets/icons/pending.svg',
	cancelled: '/assets/icons/cancelled.svg',
}
