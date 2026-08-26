@echo off
chcp 65001 >nul
title EvandroMqs Portfolio - Launcher
cd /d "%~dp0"
cls

:: Verificar se o Node.js está instalado
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo ================================================================
    echo           EVANDROMQS - PORTFÓLIO PESSOAL (REACT + VITE)
    echo ================================================================
    echo.
    echo [ERRO] Node.js não foi encontrado no sistema!
    echo Por favor, instale o Node.js em: https://nodejs.org
    echo.
    pause
    exit /b 1
)

:: Verificar se o npm está instalado
where npm >nul 2>&1
if %errorlevel% neq 0 (
    echo ================================================================
    echo           EVANDROMQS - PORTFÓLIO PESSOAL (REACT + VITE)
    echo ================================================================
    echo.
    echo [ERRO] npm não foi encontrado no sistema!
    echo.
    pause
    exit /b 1
)

:: Verificar e instalar dependencias automaticamente na primeira execucao
if not exist "node_modules\" (
    echo ================================================================
    echo           EVANDROMQS - PORTFÓLIO PESSOAL (REACT + VITE)
    echo ================================================================
    echo.
    echo [INFO] Primeira execução detectada! Instalando dependências (npm install)...
    echo.
    call npm install
    if %errorlevel% neq 0 (
        echo.
        echo [ERRO] Falha ao instalar as dependências. Verifique sua conexão.
        echo.
        pause
        exit /b 1
    )
    echo.
    echo [SUCESSO] Dependências instaladas com sucesso!
    echo.
    timeout /t 2 >nul
)

:menu
cls
echo ================================================================
echo           EVANDROMQS - PORTFÓLIO PESSOAL (REACT + VITE)
echo ================================================================
echo.
echo  [1] Iniciar Servidor de Desenvolvimento + Abrir Navegador (Padrão)
echo  [2] Apenas Iniciar Servidor de Desenvolvimento (Dev)
echo  [3] Gerar Build de Produção (npm run build)
echo  [4] Visualizar Build de Produção (npm run preview)
echo  [5] Reinstalar / Atualizar Dependências (npm install)
echo  [6] Abrir Projeto no VS Code
echo  [0] Sair
echo.
echo ================================================================
set "opcao="
set /p opcao="Escolha uma opção [1-6, 0] (Enter para 1): "

if "%opcao%"=="" set opcao=1
if "%opcao%"=="1" goto dev_browser
if "%opcao%"=="2" goto dev
if "%opcao%"=="3" goto build
if "%opcao%"=="4" goto preview
if "%opcao%"=="5" goto install
if "%opcao%"=="6" goto vscode
if "%opcao%"=="0" goto sair

echo.
echo Opção inválida! Tente novamente.
timeout /t 2 >nul
goto menu

:dev_browser
cls
echo ================================================================
echo  Iniciando servidor de desenvolvimento e abrindo navegador...
echo ================================================================
echo.
start "" "http://localhost:5173"
call npm run dev
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
echo  Gerando Build de Produção...
echo ================================================================
echo.
call npm run build
echo.
echo Build concluído! Pressione qualquer tecla para voltar ao menu...
pause >nul
goto menu

:preview
cls
echo ================================================================
echo  Iniciando Preview da Build de Produção...
echo ================================================================
echo.
start "" "http://localhost:4173"
call npm run preview
goto fim

:install
cls
echo ================================================================
echo  Instalando / Atualizando dependências...
echo ================================================================
echo.
call npm install
echo.
echo Operação concluída! Pressione qualquer tecla para voltar ao menu...
pause >nul
goto menu

:vscode
cls
where code >nul 2>&1
if %errorlevel% equ 0 (
    echo Abrindo projeto no VS Code...
    code .
) else (
    echo VS Code não encontrado no PATH do sistema.
)
timeout /t 2 >nul
goto menu

:sair
exit /b 0

:fim
echo.
echo Servidor encerrado.
pause
