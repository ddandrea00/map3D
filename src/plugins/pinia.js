import { defineStore } from 'pinia'

export const useStore = defineStore('storageUnits', {

  state: () => ({
    storageUnits: [],
  }),

  getters: {
    getStorageUnits: (state) => {
      return state.storageUnits
    }
  },

  actions: {
    addStorageUnit(storageUnit) {
      this.storageUnits.push(storageUnit)
    },
    removeStorageUnit(storageUnit) {
      this.storageUnits = this.storageUnits.filter((item) => item.id !== storageUnit.id)
    },
    updateStorageUnit(storageUnit) {
      this.storageUnits = this.storageUnits.map((item) => {
        if (item.id === storageUnit.id) {
          return storageUnit
        }
        return item
      })
    }
  }
})
