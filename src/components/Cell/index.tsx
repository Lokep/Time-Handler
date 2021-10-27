import { defineComponent } from 'vue'
import './index.less'

enum Link_Type {
  'replace',
  'push',
  'go'
}


export default defineComponent({
  props: {
    title: String,
    value: String,
    url: String || Number,
    linkType: {
      type: String,
      default: 'push'
    },
    isLink: Boolean,
    titleStyle: Object,
    icon: String
  },

  render() {
    const { title, value, isLink, titleStyle, icon } = this

    return (
      <div class="cell justify-between" onClick={this.handleCellClick}>
        <div class="cell-title ellipsis" style={titleStyle}>{ title }</div>
        <div class="align-center">
          <div class="cell-value">{ value }</div>
          {
            isLink || icon ? (
              <div class={'cell-right--icon iconfont ml-5  ' + icon}></div>
            ) : null
          }
        </div>
      </div>
    )
  },

  methods: {
    handleCellClick() {
      const { isLink, url, linkType } = this

      if (isLink && url) {
        switch (linkType) {
          case 'push':
            this.$router.push(url)
            break
          case 'replace':
            this.$router.replace(url)
            break 
          case 'go':
            typeof(url) == 'number' && this.$router.go(url) 
            break
        } 
      }
    }
  }
})