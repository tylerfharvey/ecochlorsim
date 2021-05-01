
originalfile = open('bwts-vars-sort.js', 'r')
vArr = []

for line in originalfile:
    vArr.append(line)
vArr.sort()
newfile = open('bwts-vars-sort2.js', 'w')
for line in vArr:
    newfile.write(line)

originalfile.close()
newfile.close()