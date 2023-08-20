import images from '../images/images';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ArticleIcon from '@mui/icons-material/Article';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import GradingIcon from '@mui/icons-material/Grading';
import WorkIcon from '@mui/icons-material/Work';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
export const universityList = [
  {
    id: '1',
    name: 'Truman state university',
    image: images?.pershing1,
    description:
      'Truman State University is a public liberal arts and sciences university located in Kirksville, Missouri, USA. It was founded in 1867 and has a current enrollment of approximately 5,000 undergraduate and graduate students. Truman is consistently ranked as one of the top public universities in the Midwest region of the United States.',
  },
  {
    id: '2',
    name: 'St. cloud state University',
    image: images?.pershing2,
    description:
      'St. Cloud State University is a public university located in St. Cloud, Minnesota, USA. It was founded in 1869 and has a current enrollment of approximately 14,000 undergraduate and graduate students. The university offers more than 200 undergraduate and graduate programs across a variety of fields, including education, business, science, and the arts.',
  },
  {
    id: '3',
    name: 'Missouri state University',
    image: images?.ryle1,
    description:
      'St. Cloud State University is a public university located in St. Cloud, Minnesota, USA. It was founded in 1869 and has a current enrollment of approximately 14,000 undergraduate and graduate students. The university offers more than 200 undergraduate and graduate programs across a variety of fields, including education, business, science, and the arts.',
  },
  {
    id: '4',
    name: 'Washington state University',
    image: images?.ryle2,
    description:
      'St. Cloud State University is a public university located in St. Cloud, Minnesota, USA. It was founded in 1869 and has a current enrollment of approximately 14,000 undergraduate and graduate students. The university offers more than 200 undergraduate and graduate programs across a variety of fields, including education, business, science, and the arts.',
  },
  {
    id: '5',
    name: 'North-West state University',
    image: images?.ryle3,
    description:
      'St. Cloud State University is a public university located in St. Cloud, Minnesota, USA. It was founded in 1869 and has a current enrollment of approximately 14,000 undergraduate and graduate students. The university offers more than 200 undergraduate and graduate programs across a variety of fields, including education, business, science, and the arts.',
  },
  {
    id: '6',
    name: 'Arkansas state University',
    image: images?.stokes1,
    description:
      'St. Cloud State University is a public university located in St. Cloud, Minnesota, USA. It was founded in 1869 and has a current enrollment of approximately 14,000 undergraduate and graduate students. The university offers more than 200 undergraduate and graduate programs across a variety of fields, including education, business, science, and the arts.',
  },
  {
    id: '7',
    name: 'Chico state University',
    image: images?.stokes2,
    description:
      'St. Cloud State University is a public university located in St. Cloud, Minnesota, USA. It was founded in 1869 and has a current enrollment of approximately 14,000 undergraduate and graduate students. The university offers more than 200 undergraduate and graduate programs across a variety of fields, including education, business, science, and the arts.',
  },
];

export const serviceList = [
  { id: 1, name: 'Visa appointment', description: 'Application fee plus service charge', price: 200, icon: <AccessTimeFilledIcon color="primary" /> },
  { id: 2, name: 'DS-160 fill up', description: 'We will fill up your DS-160 form', price: 20, icon: <ArticleIcon color="primary" /> },
  { id: 3, name: 'Mock Interview', description: '30 min online visa interview and feedback', price: 30, icon: <VideoCameraFrontIcon color="primary" /> },
  { id: 4, name: 'Career Counseling', description: 'Guidance on Major and career prospect', price: 30, icon: <WorkIcon color="primary" /> },
  { id: 5, name: 'Essay writing', description: 'We will help you write college application essays', price: 50, icon: <BorderColorIcon color="primary" /> },
  { id: 6, name: 'Resume Review', description: 'We will review you resume and suggest changes. Will help set up you linkedin', price: 30, icon: <GradingIcon color="primary" /> },
  { id: 6, name: 'Express I20 Delivery', description: 'We will provide express delivery of all of your acceptance document', price: 100, icon: <LocalShippingIcon color="primary" /> },
];

export const mockUniDetailsData = {
  title: 'Applying to U.S. Universities from Nepal',
  images: [images.ISN_0, images.ISN_1, images.ISN_2, images.ISN_3],
  content: [
    'Applying to colleges in the U.S. from Nepal involves a mix of simplicity and complexity. Although there are many consultancies in Putalisadak that can help expedite the process, they often charge a substantial fee for services that can be done on your own.',
    'As a high-school graduate of 2016, I started my application process in May of 2016. I took SAT classes at a consultancy, only to later realize that I could have studied more effectively at home. In this blog, I will outline the general steps for applying to most average U.S. universities. Applying to top-tier universities is more complex and will be covered in a separate series.',
    'In this blog, I will outline the general steps for applying to most average U.S. universities. Applying to top-tier universities is more complex and will be covered in a separate series.',
  ],
};
export const studentDummyData = {
  personalInfo: {
    firstName: 'John',
    lastName: 'Doe',
    gender: 'Male',
    dateOfBirth: '2000-01-01',
    profilePicture: null,
  },
  contactInfo: {
    email: 'john.doe@example.com',
    mobile: '123-456-7890',
  },
  addressDetails: {
    street: '123 Main St',
    city: 'Springfield',
    province: 'IL',
    zip: '62704',
  },
  applicationDetails: {
    graduationDate: '2022-05-20',
    gpa: '3.5',
    highSchoolMajor: 'Science',
    intendedFirstMajor: 'Computer Science',
    intendedSecondMajor: 'Math',
  },
  files: [
    { name: 'Passport.pdf', url: 'path/to/passport.pdf' },
    { name: 'Transcript.pdf', url: 'path/to/transcript.pdf' },
  ],
  universitySelected: [
    { name: 'MIT', url: 'https://www.mit.edu', status: 'Applied' },
    { name: 'Stanford', url: 'https://www.stanford.edu', status: 'None' },
  ],
  servicesSelected: [
    { name: 'Visa Appointment', description: 'Assistance with scheduling visa appointment.', completed: true },
    { name: 'DS-160', description: 'Help filling DS-160 form.', completed: false },
  ],
};
