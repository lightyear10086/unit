import {
  getAllSessionStorage,
  getStorageKeys,
  storageHasKey,
} from '../../../../../client/util/web/storage'
import { J } from '../../../../../interface/J'
import { V } from '../../../../../interface/V'
import { Primitive } from '../../../../../Primitive'

export type I = {}

export type O = {}

export default class SessionStorage extends Primitive<I, O> implements V, J {
  constructor() {
    super({
      i: [],
      o: [],
    })
  }

  private _checkAPI = () => {
    if (!sessionStorage) {
      throw new Error('Session Storage API not implemented')
    }
  }

  async read(): Promise<any> {
    this._checkAPI()

    const obj = getAllSessionStorage()
    return obj
  }

  async write(data: any): Promise<void> {
    this._checkAPI()

    throw new Error('Method not implemented.')
  }

  async get(name: string): Promise<any> {
    this._checkAPI()

    const value = sessionStorage.getItem(name)
    if (value === null) {
      throw new Error('item not found')
    } else {
      return value
    }
  }

  async set(name: string, data: any): Promise<void> {
    this._checkAPI()

    localStorage.setItem(name, data)
  }

  async delete(name: string): Promise<any> {
    this._checkAPI()

    sessionStorage.removeItem(name)
  }

  setPath(path: string[], name: string, data: any): Promise<void> {
    throw new Error('Method not implemented.')
  }

  getPath(path: string[], name: string): Promise<any> {
    throw new Error('Method not implemented.')
  }

  deletePath(path: string[], name: string): Promise<void> {
    throw new Error('Method not implemented.')
  }

  async keys(): Promise<string[]> {
    const keys = getStorageKeys(sessionStorage)
    return keys
  }

  async hasKey(name: string): Promise<boolean> {
    const has = storageHasKey(sessionStorage, name)
    return has
  }
}
