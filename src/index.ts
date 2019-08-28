import './iconfont'
import css from './css'

const dropdownShowClass = 'switch-address_dropdown switch-address_dropdown-show'
const dropdownHideClass = 'switch-address_dropdown switch-address_dropdown-hide'
const delayTime = 200

interface IInput {
  color?: string // icon颜色
  address: {[name: string]: string} // 传入的环境映射地址
  default?: string // 默认的原本环境
  exclude?: string | string[], // 指定环境不生成该组件
}

export default class SwitchAddress {

  public env = ''
  public address = ''

  constructor(data: IInput) {
    this.verify(data)

    this.env = sessionStorage.getItem('env') || data.default || ''
    this.address = data.address[this.env]

    if (!this.isSpecialEnv(data.exclude, data.default)) {
      this.createStyle()
      this.createElement(data)
    }
  }

  private verify(data: IInput) {
    if (typeof data.address !== 'object') {
      throw new Error('property address is not object')
    }
  }

  private createStyle() {
    const style = document.createElement('style')
    style.innerHTML = css
    document.head.appendChild(style)
  }

  private createElement(initData: IInput) {
    const node = document.createElement('div')

    let dropdownItems = ''
    for (const name of Object.keys(initData.address)) {
      dropdownItems += `
        <div
          class="switch-address_dropdown_item${this.selectAddressClass(name, initData.default)}"
          data-id="${name}">${name}${name === initData.default ? ' 🌴' : ''}
        </div>
      `
    }

    const html = `
      <div class="switch-address">
        <svg class="switch-address_icon" style="color: ${ initData.color || '#000' }" aria-hidden="true">
          <use xlink:href="#icon-anzhuologo"></use>
        </svg>
        <div class="switch-address_dropdown">
          ${dropdownItems}
        </div>
      </div>
    `

    node.innerHTML = html

    const switchAddress = node.querySelector('.switch-address') as HTMLElement
    const dropdown = node.querySelector('.switch-address_dropdown') as HTMLElement
    document.body.appendChild(node)

    switchAddress.onclick = (e) => {
      e.stopPropagation()
      if (dropdown.className.indexOf('show') === -1) {
        dropdown.style.display = 'block'
        setTimeout(() => {
          dropdown.className = dropdownShowClass
        })
      } else {
        dropdown.className = dropdownHideClass
        setTimeout(() => {
          dropdown.style.display = 'none'
        }, delayTime)
      }
      if (e.target && (e.target as HTMLDivElement).className === 'switch-address_dropdown_item') {
        const env = (e.target as HTMLDivElement).attributes[1].value
        sessionStorage.setItem('env', env)
        window.location.reload()
      }
    }

    document.body.addEventListener('click', () => {
      if (dropdown.style.display === 'none') {
        return
      }
      dropdown.className = dropdownHideClass
      setTimeout(() => {
        dropdown.style.display = 'none'
      }, delayTime)
    })

  }

  private selectAddressClass(name: string, defaultEnv?: string | undefined) {
    if (!this.env && defaultEnv && name === defaultEnv) {
      return ' switch-address_dropdown-selected'
    }
    if (name === this.env) {
      return ' switch-address_dropdown-selected'
    }
    return ''
  }

  private isSpecialEnv(excludeEnv: string | string[] | undefined, defaultEnv: string | undefined) {
    const type = typeof excludeEnv
    if (type === 'string') {
      return defaultEnv === excludeEnv
    }
    if (type === 'object') {
      return (excludeEnv as string[]).find((val) => val === defaultEnv)
    }
    return false
  }
}
