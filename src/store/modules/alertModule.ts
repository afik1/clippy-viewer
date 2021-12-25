import { AlertTypes, AlertModuleState } from '../interfaces'

const AlertModule = {
  namespaced: true,
  state: {
    showAlert: false,
    alertText: '',
    alertType: AlertTypes.ERROR,
  } as AlertModuleState,
  mutations: {
    SET_MESSAGE_TEXT(state: AlertModuleState, text: string): void {
      state.alertText = text
    },
    SET_MESSAGE_TYPE(state: AlertModuleState, type: AlertTypes): void {
      state.alertType = type
    },
    SHOW_MESSAGE(state: AlertModuleState): void {
      state.showAlert = true
    },
    HIDE_MESSAGE(state: AlertModuleState): void {
      state.showAlert = false
    },
  },
  actions: {
    showErrorMessage(context: any, messageText: string): void {
      context.commit('SET_MESSAGE_TYPE', AlertTypes.ERROR)
      context.commit('SET_MESSAGE_TEXT', messageText)
      context.commit('SHOW_MESSAGE')
      setTimeout(() => context.commit('HIDE_MESSAGE'), 5000)
    },
    clearMessages(context: any): void {
      context.commit('HIDE_MESSAGE')
    },
  },
}

export default AlertModule
