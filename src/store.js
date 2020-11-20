import Vue from 'vue'

export const store = Vue.observable({
  tags: [],
})

export const mutations = {
  setTag(tag) {
    let tagToLower = tag.toLowerCase()

    if (!store.tags.includes(tagToLower)) {
      store.tags.push(tagToLower)
    }
  },
  removeAllTags() {
    store.tags = []
  },
  removeTag(tag) {
    store.tags = store.tags.filter(
      (storeTag) => storeTag.toLowerCase() !== tag.toLowerCase()
    )
  },
}
