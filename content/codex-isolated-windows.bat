@echo off
chcp 65001
echo ========== 正在启动3个隔离版Codex窗口 ==========
timeout /t 1 /nobreak >nul

if not exist "C:\Users\fuyue\.codex-win1" mkdir "C:\Users\fuyue\.codex-win1"
if not exist "C:\Users\fuyue\.codex-win2" mkdir "C:\Users\fuyue\.codex-win2"
if not exist "C:\Users\fuyue\.codex-win3" mkdir "C:\Users\fuyue\.codex-win3"

start "" powershell -NoExit -Command "$env:CODEX_HOME='C:\Users\fuyue\.codex-win1'; codex"
start "" powershell -NoExit -Command "$env:CODEX_HOME='C:\Users\fuyue\.codex-win2'; codex"
start "" powershell -NoExit -Command "$env:CODEX_HOME='C:\Users\fuyue\.codex-win3'; codex"

echo 三个Codex窗口已启动完成！
pause