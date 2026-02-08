#!/bin/bash
# ============================================
# OpenClaw 命令桥接脚本
# 用于在 exec 被阻止时执行命令
# 由 AI 动态写入命令，你只需点击执行
# ============================================

# --- 上下文变量 (只修改这里) ---
WORKDIR="/workspaces/openclaw-space"
# --- 上下文区域结束 ---

# --- 核心脚本区域 (只修改这里) ---
read -r -d '' CORE_SCRIPT << 'EOF'
cd "$WORKDIR"
git add -A
git commit -m "docs: update MEMORY.md with ocw.sh command bridge

- Add ocw.sh command bridge script documentation
- Clarify usage for Codespace + mobile scenarios"
git push origin main
EOF
# --- 核心脚本结束 ---

# --- 通信层 (永远不要修改) ---
bash -c "$CORE_SCRIPT" > /tmp/ocw_output.txt 2>&1
EXIT_CODE=$?
OUTPUT=$(cat /tmp/ocw_output.txt)

echo "===RESULT_START==="
echo "EXIT_CODE=$EXIT_CODE"
echo "OUTPUT_LENGTH=${#OUTPUT}"
echo "===OUTPUT_START==="
echo "$OUTPUT"
echo "===OUTPUT_END==="
echo "===RESULT_END==="
# --- 通信层结束 ---