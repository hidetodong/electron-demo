/*
 * @Author: hidetodong
 * @Date: 2022-11-03 23:06:02
 * @LastEditTime: 2022-11-03 23:06:07
 * @LastEditors: hidetodong
 * @Description: 
 * @FilePath: /electron-demo-vite/electron-jue-jin/src/main/mainEntry.ts
 * HIDETOXIC - 版权所有
 */
import { app,BrowserWindow } from 'electron'

let mainWindow :BrowserWindow

app.whenReady().then(()=>{
    mainWindow = new BrowserWindow({})
    mainWindow.loadURL(process.argv[2])
})