type ElectronStoreIPCMessage = 'electron-store-set' | 'electron-store-get';

export type IPCMessage = ElectronStoreIPCMessage;

export class IPCMessages {
  static ELECTRON_STORE_SET = 'electron-store-set';

  static ELECTRON_STORE_GET = 'electron-store-get';
}
