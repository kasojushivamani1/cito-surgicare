// Centralised, factual company data for CITO Surgicare.
// Only information provided in the brief/brochure is included here.
// No prices, stock levels, certifications, testimonials or claims are invented.
//
// Product images are real panels extracted from the CITO Surgicare brochure.
// Paths come from the brochure asset manifest (public/images/brochure/...).
// Each mapping below was visually verified against the extracted image.

export const COMPANY = {
  name: 'CITO Surgicare',
  tagline: 'Medical equipment sales, rentals, service & hospital furniture manufacturing',
  phone1: '+91 79937 41100',
  phone1Link: 'tel:+917993741100',
  phone2: '+91 79937 61100',
  phone2Link: 'tel:+917993761100',
  email: 'citosurgicare@gmail.com',
  emailLink: 'mailto:citosurgicare@gmail.com',
  address:
    'Shop No. 1, Plot No. 30 & 37, Icon Classic, Nizampet, Hyderabad – 500090',
  whatsappNumber: '917993741100',
}

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'products', label: 'Products' },
  { id: 'rentals', label: 'Rentals' },
  { id: 'furniture', label: 'Hospital Furniture' },
  { id: 'trust', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export const CATEGORIES = [
  'CPAP / BiPAP',
  'Oxygen Concentrators',
  'Patient Monitors',
  'Hospital Beds',
  'Wheelchairs',
  'Suction Machines',
  'ECG Machines',
  'Infusion Pumps',
  'OT Equipment',
  'Hospital Furniture',
]

// Product catalogue drawn from the CITO Surgicare brochure categories.
export const PRODUCTS = [
  {
    id: 'cpap-bipap',
    name: 'CPAP / BiPAP Machines',
    category: 'CPAP / BiPAP',
    icon: 'Wind',
    image: '/images/brochure/page-10/page-10-item-07.png',
    description:
      'CPAP and BiPAP machines for sleep and respiratory support, available for purchase or rental.',
    tags: ['cpap', 'bipap', 'sleep therapy', 'respiratory'],
  },
  {
    id: 'oxygen-concentrators',
    name: 'Oxygen Concentrators',
    category: 'Oxygen Concentrators',
    icon: 'Wind',
    image: '/images/brochure/page-10/page-10-item-03.png',
    description:
      'Oxygen concentrators for continuous oxygen supply at home and in clinical settings.',
    tags: ['oxygen', 'concentrator', 'home oxygen', 'respiratory'],
  },
  {
    id: 'patient-monitors',
    name: 'Patient Monitors',
    category: 'Patient Monitors',
    icon: 'Activity',
    image: '/images/brochure/page-09/page-09-item-04.png',
    description:
      'Patient monitors for tracking vital signs such as SpO2, pulse, NIBP and temperature.',
    tags: ['monitor', 'vitals', 'spo2', 'nibp', 'icu'],
  },
  {
    id: 'hospital-beds',
    name: 'Hospital Beds',
    category: 'Hospital Beds',
    icon: 'BedDouble',
    image: '/images/brochure/page-02/page-02-item-06.png',
    description:
      'Manual and adjustable hospital beds for patient care at home and in facilities.',
    tags: ['bed', 'icu bed', 'semi fowler', 'adjustable'],
  },
  {
    id: 'wheelchairs',
    name: 'Wheelchairs',
    category: 'Wheelchairs',
    icon: 'Accessibility',
    image: '/images/brochure/page-11/page-11-item-01.png',
    description:
      'Wheelchairs for patient mobility, including standard and attendant-operated models.',
    tags: ['wheelchair', 'mobility', 'folding'],
  },
  {
    id: 'suction-machines',
    name: 'Suction Machines',
    category: 'Suction Machines',
    icon: 'Gauge',
    image: '/images/brochure/page-10/page-10-item-08.png',
    description:
      'Portable and electric suction machines for airway clearance and secretions.',
    tags: ['suction', 'aspiration', 'portable'],
  },
  {
    id: 'ecg-machines',
    name: 'ECG Machines',
    category: 'ECG Machines',
    icon: 'HeartPulse',
    image: '/images/brochure/page-09/page-09-item-06.png',
    description:
      'ECG machines for cardiac monitoring and electrocardiogram recording.',
    tags: ['ecg', 'ekg', 'cardiac', 'heart'],
  },
  {
    id: 'infusion-pumps',
    name: 'Infusion Pumps',
    category: 'Infusion Pumps',
    icon: 'Syringe',
    image: '/images/brochure/page-10/page-10-item-06.png',
    description:
      'Volumetric and syringe infusion pumps for controlled fluid and medication delivery.',
    tags: ['infusion', 'pump', 'syringe pump', 'iv'],
  },
  {
    id: 'ot-equipment',
    name: 'OT Equipment',
    category: 'OT Equipment',
    icon: 'Scissors',
    image: '/images/brochure/page-08/page-08-item-07.png',
    description:
      'Operating theatre equipment including OT tables, lights and surgical support gear.',
    tags: ['ot', 'operating theatre', 'surgical', 'operation table', 'ot light'],
  },
  {
    id: 'hospital-furniture',
    name: 'Hospital Furniture',
    category: 'Hospital Furniture',
    icon: 'Layers',
    image: '/images/brochure/page-06/page-06-item-04.png',
    description:
      'Manufactured hospital furniture such as trolleys, stools, cabinets and examination units.',
    tags: ['furniture', 'trolley', 'stool', 'cabinet', 'examination'],
  },
]

export const RENTAL_ITEMS = [
  {
    id: 'rent-cpap-bipap',
    name: 'CPAP / BiPAP on Rent',
    icon: 'Wind',
    image: '/images/brochure/page-10/page-10-item-07.png',
    description: 'CPAP and BiPAP machines available on rental for home therapy.',
  },
  {
    id: 'rent-oxygen-concentrator',
    name: 'Oxygen Concentrators on Rent',
    icon: 'Wind',
    image: '/images/brochure/page-10/page-10-item-03.png',
    description: 'Oxygen concentrators available on rental for continuous oxygen needs.',
  },
  {
    id: 'rent-hospital-bed',
    name: 'Hospital Beds on Rent',
    icon: 'BedDouble',
    image: '/images/brochure/page-02/page-02-item-06.png',
    description: 'Manual and adjustable hospital beds available on rental for home care.',
  },
  {
    id: 'rent-wheelchair',
    name: 'Wheelchairs on Rent',
    icon: 'Accessibility',
    image: '/images/brochure/page-11/page-11-item-01.png',
    description: 'Wheelchairs available on rental for short-term and long-term mobility.',
  },
  {
    id: 'rent-suction-machine',
    name: 'Suction Machines on Rent',
    icon: 'Gauge',
    image: '/images/brochure/page-10/page-10-item-08.png',
    description: 'Suction machines available on rental for home and clinical use.',
  },
  {
    id: 'rent-patient-monitor',
    name: 'Patient Monitors on Rent',
    icon: 'Activity',
    image: '/images/brochure/page-09/page-09-item-04.png',
    description: 'Patient monitors available on rental for observation and monitoring.',
  },
]

export const FURNITURE_ITEMS = [
  {
    name: 'Hospital Trolleys',
    icon: 'Truck',
    image: '/images/brochure/page-05/page-05-item-03.png',
  },
  {
    name: 'Instrument & Dressing Trolleys',
    icon: 'Truck',
    image: '/images/brochure/page-06/page-06-item-04.png',
  },
  { name: 'Examination Tables', icon: 'BedDouble' },
  { name: 'Doctor / Attendant Stools', icon: 'Armchair' },
  { name: 'Medicine Cabinets', icon: 'Layers' },
  { name: 'Custom Hospital Furniture', icon: 'Ruler' },
]

export const SERVICES = [
  {
    id: 'service-sales',
    name: 'Equipment Sales',
    icon: 'ShoppingBag',
    description:
      'Purchase of medical equipment across the CITO Surgicare product range.',
  },
  {
    id: 'service-rentals',
    name: 'Equipment Rentals',
    icon: 'Clock',
    description:
      'Rental options for beds, oxygen concentrators, CPAP/BiPAP and other equipment.',
  },
  {
    id: 'service-repair',
    name: 'Service & Repair',
    icon: 'Wrench',
    description:
      'Servicing and repair support for medical equipment, coordinated by our team.',
  },
  {
    id: 'service-manufacturing',
    name: 'Hospital Furniture Manufacturing',
    icon: 'Factory',
    description:
      'In-house manufacturing of hospital furniture for institutions and facilities.',
  },
  {
    id: 'service-bulk',
    name: 'Bulk & Institutional Supply',
    icon: 'Building2',
    description:
      'Quotations for hospitals, clinics and institutions requiring bulk quantities.',
  },
  {
    id: 'service-guidance',
    name: 'Product Guidance',
    icon: 'MessagesSquare',
    description:
      'Help choosing the right equipment for home care, clinic or hospital requirements.',
  },
]

export const WHY_US = [
  {
    title: 'Sales, Rentals & Service',
    text: 'One point of contact for buying, renting and servicing medical equipment.',
  },
  {
    title: 'In-house Manufacturing',
    text: 'Hospital furniture manufactured to suit institutional requirements.',
  },
  {
    title: 'Hyderabad Based',
    text: 'Located at Nizampet, Hyderabad, serving homes, clinics and hospitals.',
  },
  {
    title: 'Quick Enquiry Response',
    text: 'Send an enquiry on WhatsApp and our team will get back to you.',
  },
]