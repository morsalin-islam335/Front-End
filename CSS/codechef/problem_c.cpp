#include<bits/stdc++.h>
using namespace std;
int main()
{
    int test;
    cin >> test;
    while(test --)
    {
        int n; cin >> n;
        if(n >=5) cout << 1 <<" "<<n-1<<"\n";
        else cout << 0 << " "<< n << "\n";
    }
    return 0;
}