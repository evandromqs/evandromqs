@echo off
title EvandroMqs Portfolio - Launcher
cd /d "%~dp0"
cls

:: 1. Verificar se o Node.js esta instalado
where node >nul 2>&1
if %errorlevel% neq 0 goto erro_node

:: 2. Verificar se o npm esta instalado
where npm >nul 2>&1
if %errorlevel% neq 0 goto erro_npm

:: 3. Verificar dependencias (node_modules)
if not exist "node_modules\" goto instalar_deps
goto menu

:instalar_deps
cls
echo ================================================================
echo           EVANDROMQS - PORTFOLIO PESSOAL [REACT + VITE]
echo ================================================================
echo.
echo [INFO] Primeira execucao detectada! Instalando dependencias...
echo.
call npm install
if %errorlevel% neq 0 (
    echo.
    echo [ERRO] Falha ao instalar as dependencias. Verifique sua conexao.
    echo.
    pause
    exit /b 1
)
echo.
echo [SUCESSO] Dependencias instaladas com sucesso!
echo.
timeout /t 2 >nul
goto menu

:erro_node
cls
echo ================================================================
echo           EVANDROMQS - PORTFOLIO PESSOAL [REACT + VITE]
echo ================================================================
echo.
echo [ERRO] Node.js nao foi encontrado no sistema!
echo Por favor, instale o Node.js em: https://nodejs.org
echo Certifique-se de que o Node.js esta no PATH do sistema.
echo.
pause
exit /b 1

:erro_npm
cls
echo ================================================================
echo           EVANDROMQS - PORTFOLIO PESSOAL [REACT + VITE]
echo ================================================================
echo.
echo [ERRO] npm nao foi encontrado no sistema!
echo.
pause
exit /b 1

:menu
cls
echo ================================================================
echo           EVANDROMQS - PORTFOLIO PESSOAL [REACT + VITE]
echo ================================================================
echo.
echo  [1] Iniciar Servidor de Desenvolvimento + Abrir Navegador [Padrao]
echo  [2] Apenas Iniciar Servidor de Desenvolvimento [Dev]
echo  [3] Gerar Build de Producao [npm run build]
echo  [4] Visualizar Build de Producao [npm run preview]
echo  [5] Reinstalar / Atualizar Dependencias [npm install]
echo  [6] Abrir Projeto no VS Code
echo  [0] Sair
echo.
echo ================================================================
set "opcao="
set /p opcao="Escolha uma opcao [1-6, 0] (Enter para 1): "

if "%opcao%"=="" set opcao=1
if "%opcao%"=="1" goto dev_browser
if "%opcao%"=="2" goto dev
if "%opcao%"=="3" goto build
if "%opcao%"=="4" goto preview
if "%opcao%"=="5" goto install
if "%opcao%"=="6" goto vscode
if "%opcao%"=="0" goto sair

echo.
echo Opcao invalida! Tente novamente.
timeout /t 2 >nul
goto menu

:dev_browser
cls
echo ================================================================
echo  Iniciando servidor de desenvolvimento e abrindo navegador...
echo ================================================================
echo.
call npm run dev -- --open
goto fim

:dev
cls
echo ================================================================
echo  Iniciando servidor de desenvolvimento...
echo ================================================================
echo.
call npm run dev
goto fim

:build
cls
echo ================================================================
echo  Gerando Build de Producao...
echo ================================================================
echo.
call npm run build
echo.
echo Build concluido! Pressione qualquer tecla para voltar ao menu...
pause >nul
goto menu

:preview
cls
echo ================================================================
echo  Iniciando Preview da Build de Producao...
echo ================================================================
echo.
start "" "http://localhost:4173"
call npm run preview
goto fim

:install
cls
echo ================================================================
echo  Instalando / Atualizando dependencias...
echo ================================================================
echo.
call npm install
echo.
echo Operacao concluida! Pressione qualquer tecla para voltar ao menu...
pause >nul
goto menu

:vscode
cls
where code >nul 2>&1
if %errorlevel% equ 0 (
    echo Abrindo projeto no VS Code...
    code .
) else (
    echo VS Code nao encontrado no PATH do sistema.
)
timeout /t 2 >nul
goto menu

:sair
exit /b 0

:fim
echo.
echo Servidor encerrado.
pause
