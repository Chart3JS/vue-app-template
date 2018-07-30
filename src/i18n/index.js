import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const messages = {
  en: {
    global: {},
    login: {
      user_name: 'User Name',
      user_password: 'User Password',
      user_name_required: 'User Name is required',
      user_password_required: 'Password is required',
      user_name_must_be_valid: 'Invalid User Name',
      user_password_must_be_valid: 'Invalid Password',
      login_button_text: 'Sign In',
      pageText: '{0}-{1} of {2}'
    },
    device: {
      device_connect_button: 'Connect To Device',
      search_by_name: 'Search By Device Name'
    }
  },
  he: {
    global: {},
    login: {
      user_name: 'שם משתמש',
      user_password: 'סיסמה',
      user_name_required: 'שם משתמש חובה',
      user_password_required: 'סיסמה חובה',
      user_name_must_be_valid: 'שם משתמש לא חוקי',
      user_password_must_be_valid: 'סיסמה לא חוקית',
      login_button_text: 'כנס',
      pageText: '{0}-{1} מתוך {2}'
    },
    device: {
      device_connect_button: 'תתחבר למכשיר',
      search_by_name: 'חפש שם המכשיר'
    }
  }
}

export default new VueI18n({
  locale: 'en',
  messages
})
