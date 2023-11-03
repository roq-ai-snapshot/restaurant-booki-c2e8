interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Restaurant Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Restaurant Owner', 'Restaurant Manager', 'Wait Staff', 'Chef'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Edit your info.', 'Checkout the restaurants.', 'Book a table.', 'View restaurant details.'],
  ownerAbilities: [
    'Manage restaurant information',
    'Create menus for the restaurant',
    'Manage bookings',
    'Edit personal info',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/3c2460be-23d1-4816-88cd-103e85ffaca0',
};
